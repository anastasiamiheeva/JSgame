const navButton = document.querySelectorAll('.nav__item');
const btnStart = document.getElementById('button-start')


let navButtonOnClick = (item) => {
    item.addEventListener('click', function onClick() {
      navButton.forEach((el) => {
        el.classList.remove('checked');
        this.classList.add('checked');
      })
    })
}
  
navButton.forEach(navButtonOnClick);