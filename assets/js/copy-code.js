'use strict';

(function () {
  function init() {
    var pres = document.querySelectorAll('.page-content pre');
    pres.forEach(function (pre) {
      // Skip if already wrapped
      if (pre.parentElement && pre.parentElement.classList.contains('code-block-wrapper')) return;

      // Create wrapper
      var wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper';

      // Create header bar with copy button
      var header = document.createElement('div');
      header.className = 'code-block-header';

      // Detect language from the code element
      var codeEl = pre.querySelector('code[data-lang]');
      var lang = codeEl ? codeEl.getAttribute('data-lang') : '';

      var langLabel = document.createElement('span');
      langLabel.className = 'code-block-lang';
      langLabel.textContent = lang;

      var btn = document.createElement('button');
      btn.className = 'copy-code-btn';
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Copy code to clipboard');
      btn.textContent = '\uD83D\uDCC4 Copy';

      btn.addEventListener('click', function () {
        var code = pre.querySelector('code') || pre;
        navigator.clipboard.writeText(code.textContent).then(function () {
          btn.textContent = '\u2705 Copied!';
          setTimeout(function () {
            btn.textContent = '\uD83D\uDCC4 Copy';
          }, 2000);
        });
      });

      header.appendChild(langLabel);
      header.appendChild(btn);

      // Wrap: insert wrapper before pre, move pre inside
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(header);
      wrapper.appendChild(pre);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
