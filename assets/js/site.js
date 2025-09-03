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

  // Render Mermaid: convert fenced ```mermaid blocks to <div class="mermaid"> ... </div>
  function renderMermaid(){
    if(typeof mermaid === 'undefined') return;
    var pres = document.querySelectorAll('pre > code.language-mermaid, pre > code[class="mermaid"], pre code.mermaid');
    pres.forEach(function(code){
      var pre = code.parentElement;
      var container = document.createElement('div');
      container.className = 'mermaid';
      container.textContent = code.textContent;
      pre.replaceWith(container);
    });
    // Handle Rouge-wrapped blocks: <div class="language-mermaid highlighter-rouge"><div class="highlight"><pre>...</pre></div></div>
    var rouge = document.querySelectorAll('div.language-mermaid.highlighter-rouge');
    rouge.forEach(function(wrapper){
      var code = wrapper.querySelector('pre');
      if(!code) return;
      var container = document.createElement('div');
      container.className = 'mermaid';
      container.textContent = code.textContent;
      wrapper.replaceWith(container);
    });
    var blocks = Array.from(document.querySelectorAll('.mermaid'));
    blocks.forEach(function(block, idx){
      var src = block.textContent;
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
    });
  } else {
    renderMermaid();
    wirePostSearch();
    wireHomePostFilter();
  }
})();

// Client-side search and tag filtering on Posts page
function wirePostSearch(){
  var list = document.getElementById('post-list');
  if(!list) return;
  var items = Array.from(list.querySelectorAll('.post-item'));
  var input = document.getElementById('post-search');
  var count = document.getElementById('post-count');
  var tagButtons = Array.from(document.querySelectorAll('.tag-filter'));
  var activeTags = new Set();

  function apply(){
    var q = (input && input.value || '').trim().toLowerCase();
    var shown = 0;
    items.forEach(function(li){
      var title = li.getAttribute('data-title');
      var tags = li.getAttribute('data-tags');
      var matchesText = !q || (title && title.indexOf(q) > -1);
      var matchesTags = activeTags.size === 0 || Array.from(activeTags).every(function(t){ return tags && tags.indexOf(t) > -1; });
      var visible = matchesText && matchesTags;
      li.style.display = visible ? '' : 'none';
      if(visible) shown++;
    });
    if(count) count.textContent = shown + ' / ' + items.length + ' posts';
  }

  if(input) input.addEventListener('input', apply);
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
  var count = document.getElementById('home-post-count');
  var tagButtons = Array.from(document.querySelectorAll('#home-tag-filters .tag-filter'));
  var activeTags = new Set();

  function apply(){
    var q = (input && input.value || '').trim().toLowerCase();
    var shown = 0;
    cards.forEach(function(card){
      var title = card.getAttribute('data-title');
      var tags = card.getAttribute('data-tags');
      var matchesText = !q || (title && title.indexOf(q) > -1);
      var matchesTags = activeTags.size === 0 || Array.from(activeTags).every(function(t){ return tags && tags.indexOf(t) > -1; });
      var visible = matchesText && matchesTags;
      card.style.display = visible ? '' : 'none';
      if(visible) shown++;
    });
    if(count) count.textContent = shown + ' / ' + cards.length + ' posts';
  }

  if(input) input.addEventListener('input', apply);
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
    apply();
  });

  apply();
}

