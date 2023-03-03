import './zepto.css';

function makeTOC(nav, headings) {
  let ul;
  for (const hx of headings) {
    if (!hx.id) hx.id = hx.textContent.trim().toLowerCase().replace(/\W+/g, '-');

    const level = hx.tagName.toLowerCase();
    if (!hx.parentNode.querySelector('h2')) {
      const a = document.createElement('a');
      a.textContent = hx.textContent;
      a.href = `#${hx.id}`;
      nav.appendChild(a);
    }
    else if (level === 'h1') {
      const details = document.createElement('details');
      nav.appendChild(details);

      const summary = document.createElement('summary');
      summary.setAttribute('aria-haspopup', 'listbox');
      summary.textContent = hx.textContent;
      details.appendChild(summary);

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

makeTOC(
  document.querySelector('main nav'),
  Array.from(document.querySelectorAll('h1, h2')),
);

const searchForm = document.querySelector('nav form');
const q = searchForm.querySelector('[name=q]');
q.value = q.value.replace('repo:jhthorsen/zeptocss ', '');
searchForm.addEventListener('submit', (_event) => {
  q.value = 'repo:jhthorsen/zeptocss ' + q.value;
});
