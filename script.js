const startMenu = document.getElementById('start-menu');
const gameContainer = document.getElementById('game-container')
const navButton = document.querySelectorAll('.nav__item');
const btnStart = document.getElementById('button-start')
const gameField = document.createElement('div');
const btnSimple = document.getElementById('simple');
const btnMedium = document.getElementById('medium');
const btnDifficult = document.getElementById('difficult');


let navButtonOnClick = (item) => {
  item.addEventListener('click', function() {
    navButton.forEach((el) => {
      el.classList.remove('checked');
      this.classList.add('checked');
    })
  })
}


navButton.forEach(navButtonOnClick);

let getCards = () => {
  const card = document.createElement('div');
  const cardBack = document.createElement('div');
  const cardFront = document.createElement('div');

  card.classList.add('flip-card');
  cardBack.classList.add('flip-card-back');
  cardFront.classList.add('flip-card-front');

  gameField.appendChild(card); 
  card.appendChild(cardFront);
  card.appendChild(cardBack);
}

let btnStartOnClick = () => {
  startMenu.remove();
  gameContainer.appendChild(gameField);

  function getGameField() {
    
    if (btnSimple.classList.contains('checked')) {
      gameField.classList.add('three-card')
      for (i = 0; i < 3; i++) {
        getCards()
      }
      return
    }
    else if (btnMedium.classList.contains('checked')) {
      gameField.classList.add('six-card')
      for (i = 0; i < 6; i++) {
        getCards()
      }
      return
    }
    else {
      gameField.classList.add('ten-card')
      for (i = 0; i < 10; i++) {
        getCards()
      }
      return
    };
  }

  getGameField() 



}

btnStart.addEventListener('click', btnStartOnClick)
