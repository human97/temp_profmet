const fakeFilters = [{
    name: 3,
    checked: false
  },
  {
    name: 4,
    checked: false
  },
  {
    name: 5,
    checked: false
  },
  {
    name: 6,
    checked: false
  },
  {
    name: 7,
    checked: false
  },
  {
    name: 8,
    checked: false
  },
  {
    name: 9,
    checked: false
  },
  {
    name: 10,
    checked: false
  },
]

const filters = document.querySelector('.filters');
filters.innerHTML = `
<h3 class="filters_title">Диаметр (мм)</h3>
<div class="filters_wrapper">
</div>
<!-- /.filters_wrapper -->
<button class='filters--show_more'>Показать еще</button>`


const filtersWrapper = document.querySelector('.filters_wrapper');

const showCount = 4;
const showMore = document.querySelector('.filters--show_more');

const list = fakeFilters.map((el, index) => {
  const div = document.createElement('div');

  const template = `<div class="filter_wrapper ${
    index < showCount ? '' : 'hidden'
  }">
  <label class="filter_checkbox_label" for="filter_checkbox">
    <input class="filter_checkbox" type="checkbox" id="filter_checkbox" chcked=${el.checked}>
    ${el.name}
  </label>
</div>
<!-- /.filter_wrapper -->`;
  div.innerHTML = template;
  return div;
});

list.forEach(el => {
  filtersWrapper.appendChild(el);
});

console.log(showMore)

showMore.addEventListener('click', () => {
  const items = document.querySelectorAll('.filter_wrapper');
  items.forEach((el, i) => {
    if (i > showCount) {
      el.classList.toggle('hidden');
    }
  });
});