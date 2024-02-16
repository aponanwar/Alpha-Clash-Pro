// function play() {
    
//     const homeSection = document.getElementById('home-screen');
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden');

//     //Show the Play Ground section

//     const playGroundSection = document.getElementById('play-ground-section');
//     // console.log(playGroundSection.classList);
//     playGroundSection.classList.remove('hidden');
// }


function continueGame() {
    //step-1 : Generate Random Alphabet
     const alphabet = getRandomAlphabet();
     console.log('your word', alphabet);

     // set random alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color;
    setBackgroundColorById(alphabet);



}


function play() {
    hideElementById('home-screen');
    showElementById('play-ground-section');
    continueGame();
    
}

