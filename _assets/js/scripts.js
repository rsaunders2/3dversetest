const btn__sort = document.querySelector('.btn__sort');
const btn__filter = document.querySelector('.btn__filter');

btn__sort.addEventListener('click', (event) => {
    event.target.classList.toggle('btn--selected');
    btn__filter.classList.remove('btn--selected');
    
});

btn__filter.addEventListener('click', (event) => {
    event.target.classList.toggle('btn--selected');
    btn__sort.classList.remove('btn--selected');
});