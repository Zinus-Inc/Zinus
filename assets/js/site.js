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
    try { mermaid.run({ querySelector: '.mermaid' }); } catch(e) { console && console.warn && console.warn('Mermaid render failed', e); }
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', renderMermaid);
  } else {
    renderMermaid();
  }
})();


