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
    try { mermaid.run({ querySelector: '.mermaid' }); } catch(e) { console && console.warn && console.warn('Mermaid render failed', e); }
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){
      renderMermaid();
      wirePostSearch();
    });
  } else {
    renderMermaid();
    wirePostSearch();
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


