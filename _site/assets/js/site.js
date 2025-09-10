(function(){
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.setAttribute('aria-expanded', String(!expanded));
    });
  }

  // Render Mermaid: convert various fenced mermaid code blocks to <div class="mermaid"> ... </div>
  function renderMermaid(){
    if(typeof mermaid === 'undefined') return;
    // 1) figure.highlight wrappers produced by Rouge
    var figureBlocks = document.querySelectorAll('figure.highlight code.language-mermaid');
    figureBlocks.forEach(function(code){
      var wrapper = code.closest('figure.highlight');
      if(!wrapper) return;
      var container = document.createElement('div');
      container.className = 'mermaid';
      container.textContent = code.textContent;
      wrapper.replaceWith(container);
    });
    // 2) Generic pre/code patterns
    var pres = document.querySelectorAll('pre > code.language-mermaid, pre > code.mermaid, code.language-mermaid, code.mermaid');
    pres.forEach(function(code){
      var wrapper = code.closest('pre') || code.parentElement;
      if(!wrapper) return;
      var container = document.createElement('div');
      container.className = 'mermaid';
      container.textContent = code.textContent;
      wrapper.replaceWith(container);
    });
    // 3) Rouge alt wrapper
    var rouge = document.querySelectorAll('div.language-mermaid.highlighter-rouge, div.highlighter-rouge.language-mermaid');
    rouge.forEach(function(wrapper){
      var code = wrapper.querySelector('pre, code');
      if(!code) return;
      var container = document.createElement('div');
      container.className = 'mermaid';
      container.textContent = code.textContent;
      wrapper.replaceWith(container);
    });
    var blocks = Array.from(document.querySelectorAll('.mermaid'));
    blocks.forEach(function(block, idx){
      var src = block.textContent;
      // Remove init directive lines if present (Markdown might keep them inline)
      src = src.replace(/^%%\{[^%]*\}%%\s*/m, '');
      var id = 'm-' + (idx + 1) + '-' + Date.now();
      mermaid.render(id, src).then(function(result){
        var span = document.createElement('span');
        span.innerHTML = result.svg;
        block.replaceWith(span.firstElementChild);
      }).catch(function(err){
        console.warn('Mermaid render failed:', err, '\nSource:\n' + src);
      });
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){
      renderMermaid();
      wirePostSearch();
      wireHomePostFilter();
      wireDateFilters();
    });
  } else {
    renderMermaid();
    wirePostSearch();
    wireHomePostFilter();
    wireDateFilters();
  }
})();

// Client-side search and tag filtering on Posts page
function wirePostSearch(){
  var list = document.getElementById('post-list');
  if(!list) return;
  var items = Array.from(list.querySelectorAll('.post-item'));
  var input = document.getElementById('post-search');
  var start = document.getElementById('post-start-date');
  var end = document.getElementById('post-end-date');
  var count = document.getElementById('post-count');
  var tagButtons = Array.from(document.querySelectorAll('.tag-filter'));
  var activeTags = new Set();

  function apply(){
    var q = (input && input.value || '').trim().toLowerCase();
    var startDate = parseDate(start && start.value);
    var endDate = parseDate(end && end.value, true);
    var shown = 0;
    items.forEach(function(li){
      var title = li.getAttribute('data-title');
      var tags = li.getAttribute('data-tags');
      var dateStr = li.getAttribute('data-date');
      var itemDate = parseDate(dateStr);
      var matchesText = !q || (title && title.indexOf(q) > -1);
      var matchesTags = activeTags.size === 0 || Array.from(activeTags).every(function(t){ return tags && tags.indexOf(t) > -1; });
      var matchesStart = !startDate || (itemDate && itemDate >= startDate);
      var matchesEnd = !endDate || (itemDate && itemDate <= endDate);
      var visible = matchesText && matchesTags && matchesStart && matchesEnd;
      li.style.display = visible ? '' : 'none';
      if(visible) shown++;
    });
    if(count) count.textContent = shown + ' / ' + items.length + ' posts';
  }

  if(input) input.addEventListener('input', apply);
  if(start) start.addEventListener('change', apply);
  if(end) end.addEventListener('change', apply);
  tagButtons.forEach(function(btn){
    btn.addEventListener('click', function(){
      var tag = btn.getAttribute('data-tag').toLowerCase();
      if(activeTags.has(tag)) { activeTags.delete(tag); btn.classList.remove('active'); }
      else { activeTags.add(tag); btn.classList.add('active'); }
      apply();
    });
  });
  var clear = document.getElementById('clear-filters');
  if(clear) clear.addEventListener('click', function(){
    activeTags.clear();
    tagButtons.forEach(function(b){ b.classList.remove('active'); });
    if(input) input.value = '';
    if(start) start.value = '';
    if(end) end.value = '';
    apply();
  });

  apply();
}

// Client-side search and tag filtering on Home latest posts
function wireHomePostFilter(){
  var grid = document.getElementById('home-post-grid');
  if(!grid) return;
  var cards = Array.from(grid.querySelectorAll('.post-card'));
  var input = document.getElementById('home-post-search');
  var start = document.getElementById('home-start-date');
  var end = document.getElementById('home-end-date');
  var count = document.getElementById('home-post-count');
  var tagButtons = Array.from(document.querySelectorAll('#home-tag-filters .tag-filter'));
  var activeTags = new Set();

  function apply(){
    var q = (input && input.value || '').trim().toLowerCase();
    var startDate = parseDate(start && start.value);
    var endDate = parseDate(end && end.value, true);
    var shown = 0;
    cards.forEach(function(card){
      var title = card.getAttribute('data-title');
      var tags = card.getAttribute('data-tags');
      var dateStr = card.getAttribute('data-date');
      var itemDate = parseDate(dateStr);
      var matchesText = !q || (title && title.indexOf(q) > -1);
      var matchesTags = activeTags.size === 0 || Array.from(activeTags).every(function(t){ return tags && tags.indexOf(t) > -1; });
      var matchesStart = !startDate || (itemDate && itemDate >= startDate);
      var matchesEnd = !endDate || (itemDate && itemDate <= endDate);
      var visible = matchesText && matchesTags && matchesStart && matchesEnd;
      card.style.display = visible ? '' : 'none';
      if(visible) shown++;
    });
    if(count) count.textContent = shown + ' / ' + cards.length + ' posts';
  }

  if(input) input.addEventListener('input', apply);
  if(start) start.addEventListener('change', apply);
  if(end) end.addEventListener('change', apply);
  tagButtons.forEach(function(btn){
    btn.addEventListener('click', function(){
      var tag = btn.getAttribute('data-tag').toLowerCase();
      if(activeTags.has(tag)) { activeTags.delete(tag); btn.classList.remove('active'); }
      else { activeTags.add(tag); btn.classList.add('active'); }
      apply();
    });
  });
  var clear = document.getElementById('home-clear-filters');
  if(clear) clear.addEventListener('click', function(){
    activeTags.clear();
    tagButtons.forEach(function(b){ b.classList.remove('active'); });
    if(input) input.value = '';
    if(start) start.value = '';
    if(end) end.value = '';
    apply();
  });

  apply();
}

// Shared helpers
function parseDate(value, isEnd){
  if(!value) return null;
  // value expected in YYYY-MM-DD
  var parts = String(value).split('-');
  if(parts.length !== 3) return null;
  var year = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10) - 1; // zero-based
  var day = parseInt(parts[2], 10);
  if(isNaN(year) || isNaN(month) || isNaN(day)) return null;
  // For end date, set to end of the day to be inclusive
  if(isEnd) return new Date(year, month, day, 23, 59, 59, 999);
  return new Date(year, month, day, 0, 0, 0, 0);
}

function wireDateFilters(){
  // This function exists so we have a single place to initialize any future shared logic
}

