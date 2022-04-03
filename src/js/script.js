const ratingCont = document.querySelector('#rating');
const thanksCont = document.querySelector('#thank-you');
const submitButton = document.querySelector('.submit');
const rateButtons = document.getElementsByClassName('ratebutton');
const rate = document.querySelector('.rate');
let value=0;


const assignButtons = () => {
    for (let button of rateButtons) {
        button.addEventListener('click', getValue);
    }
};

const getValue = (event) => {
    return value=event.target.textContent;
};


const getRating = () => {
    if (value !==0) {
        rate.textContent = value;
    }
};

const changeState = () => {
    if (value !==0) {
        ratingCont.setAttribute("style", 'display:none;');
        thanksCont.setAttribute("style", 'display:flex;');
        getRating();
    } else {
        alert('Plase select a rating.')
    }
    
};

submitButton.addEventListener('click', changeState);
assignButtons();
