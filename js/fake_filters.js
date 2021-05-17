window.addEventListener('load', () => {

  const filters = document.querySelector('.filters');
  const hideAll = document.querySelector('.filters--hide_all_filters_btn');
  const items = document.querySelectorAll('.filter_wrapper');
  const filtersWrapper = document.querySelector('.filters_wrapper');
  const showCount = 4;
  const showMore = document.querySelector('.filters--show_more');


  // показываем до 4-х фильтров включительно
  items.forEach((el, i) => {
    if (i < 4) {
      el.classList.remove('hidden_filters');
    }
  });


  // показываем/скрываем остальные фильтры и меняем текст в кнопке(Показать еще/Скрыть)
  showMore.addEventListener('click', () => {

    //меняем текст в кнопке
    if (showMore.textContent === 'Показать еще') {
      showMore.textContent = 'Скрыть'
    } else {
      showMore.textContent = 'Показать еще'
    }

    // показать/скрыть остальные фильтры
    items.forEach((el, i) => {
      if (i > showCount) {
        el.classList.toggle('hidden_filters');
      }
    });

  });

  // скрыть/показать блок с фильтрами по клику на filtersTitle
  hideAll.addEventListener('click', () => {
    const hideAllArrow = document.querySelector('.hide_all_filters_btn--arrow');
    hideAllArrow.classList.toggle('btn--arrow_rotate');

    filtersWrapper.classList.toggle('hidden_filters');
  })

});