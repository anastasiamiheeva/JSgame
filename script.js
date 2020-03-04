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

let btnStartOnClick = () => {

  startMenu.remove();
  gameContainer.appendChild(gameField);
  let numberOfCard;

  function getGameField() {

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

    if (btnSimple.classList.contains('checked')) {
      gameField.classList.add('three-card')
      for (i = 0; i < 3; i++) {
        getCards();
        numberOfCard = 3;
      }
      return numberOfCard;
    }

    else if (btnMedium.classList.contains('checked')) {
      gameField.classList.add('six-card')
      for (i = 0; i < 6; i++) {
        getCards();
        numberOfCard = 6;
      }
      return numberOfCard;
    }
    
    else {
      gameField.classList.add('ten-card')
      for (i = 0; i < 10; i++) {
        getCards();
        numberOfCard = 10;
      }
      return numberOfCard;
    };
  }

  getGameField() 

  const flipCard = document.querySelectorAll('.flip-card');
  let randomCard = Math.floor(Math.random() * numberOfCard);

  for (i = 0; i < numberOfCard; i++) {
    if (i === randomCard) {
      flipCard[i].firstElementChild.classList.add('winner');
    } 
  }

  let flipCardOnClick = (item) => {
    item.addEventListener('click', function() {
      flipCard.forEach((el) => {
        el.classList.remove('on-click');
        this.classList.add('on-click');
      })
    })
  }
  
  flipCard.forEach(flipCardOnClick);
}
 

btnStart.addEventListener('click', btnStartOnClick)
