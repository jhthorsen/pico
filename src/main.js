import './zepto.css';
import MenuSpy from 'menuspy';

function idFromEl(el) {
  return el.textContent.trim().toLowerCase().replace(/\W+/g, '-');
}

function makeTOC(nav, headings) {
  let prefix = '';
  let ul;

  for (const hx of headings) {
    if (!hx.id) hx.id = prefix + idFromEl(hx);
    if (hx.id == 'zeptocss') continue; // Skip main heading

    const level = hx.tagName.toLowerCase();
    if (level === 'h1') {
      const details = document.createElement('details');
      nav.appendChild(details);

      const summary = document.createElement('summary');
      summary.textContent = hx.textContent;
      details.appendChild(summary);

      prefix = idFromEl(hx) + '-';
      ul = document.createElement('ul');
      details.appendChild(ul);
    }
    else if (level === 'h2') {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = hx.textContent;
      a.href = `#${hx.id}`;
      li.appendChild(a);
      ul.appendChild(li);
    }
  }
}

const toc = document.querySelector('nav[aria-label="Table of Contents"]');
makeTOC(toc, document.querySelectorAll('h1, h2'));

new MenuSpy(toc, {
  enableLocationHash: false,
  callback({elm}) {
    const targetDetails = elm.closest('details');
    if (!targetDetails) return;
    for (const details of toc.querySelectorAll('details')) {
      details[details === targetDetails ? 'setAttribute' : 'removeAttribute']('open', true);
    }
  },
});

const searchForm = document.querySelector('nav form');
const q = searchForm.querySelector('[name=q]');
q.value = q.value.replace('repo:jhthorsen/zeptocss ', '');
searchForm.addEventListener('submit', (_event) => {
  q.value = 'repo:jhthorsen/zeptocss ' + q.value;
});

for (const name of ['grey', 'primary']) {
  const range = document.getElementById(`theme_${name}_hue`);
  const text = document.getElementById(`theme_${name}_text`);
  const root = document.documentElement;

  range.value = getComputedStyle(document.documentElement).getPropertyValue(`--${name}-hue`);
  text.innerText = range.value;
  range.addEventListener('input', (_e) => {
    root.style.setProperty(`--${name}-hue`, range.value);
    text.innerText = range.value;
  });
}

const themeSwitcher = document.getElementById(`theme_switcher`);
const setTheme = (e) => {
  const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const other = prefers === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', e.target.checked ? other : prefers);
};
themeSwitcher.addEventListener('click', setTheme);
setTheme({target: themeSwitcher});
