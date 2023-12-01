const textareaEl = document.querySelector ('textarea');
const characterNumberEl = document.querySelector ('.stat__number--characters');
const twitterNumberEl = document.querySelector ('.stat__number--twitter');
const facebookNumberEl = document.querySelector ('.stat__number--facebook');
const wordsNumberEl = document.querySelector ('.stat__number--words');

const inputHandler = () => {
    //Examples of input validation
    if (textareaEl.value.includes('<script>')){
        alert('You can\'t use <script> in your text');
        textareaEl.value = textareaEl.value.replace('<script>', '');
    }
    //Determine new numbers
    let numberOfWords = textareaEl.value.split(' ').length;
    if (textareaEl.value.length === 0) {
        numberOfWords = 0;
    }

    //determine new number
    const numberOfCharacters = textareaEl.value.length;
    const twitterCharactersLeft = 280 - numberOfCharacters;
    const facebookCharactersLeft = 2200 - numberOfCharacters;
    
    //add visual indicator if limit is exceeded
    if (twitterCharactersLeft < 0) {
        twitterNumberEl.classList.add('stat__number--limit');
    } else {
        twitterNumberEl.classList.remove('stat__number--limit');
    }

    if (facebookCharactersLeft < 0) {
        facebookNumberEl.classList.add('stat__number--limit');
    } else {
        facebookNumberEl.classList.remove('stat__number--limit');
    }

    //set new number
    wordsNumberEl.textContent = numberOfWords;
    characterNumberEl.textContent = numberOfCharacters;
    twitterNumberEl.textContent = twitterCharactersLeft;
    facebookNumberEl.textContent = facebookCharactersLeft;
};

textareaEl.addEventListener ('input', inputHandler);