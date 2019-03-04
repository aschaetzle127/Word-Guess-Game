window.onload = function () {

    // variables for the game functions
    var winCountElement = document.getElementById("win-count");
    var currentWordElement = document.getElementById("current-word");
    var guessCountElement = document.getElementById("guess-count");
    var lettersGuessedElement = document.getElementById("letters-guessed");


    var words = [
        "Louis Vuitton",
        "Chanel",
        "Yves Saint Laurent",
        "Michael Kors",
        "Gucci",
        "Dior",
        "Prada",
    ];

    var randomWord = words[Math.floor(Math.random() * words.length)];

    var listLetters = [];
    const maxAttempts = 10;
    var guessCount = 0;
    var guessesRemaining = maxAttempts - guessCount;
    var wordComplete = false;
    var winCount = 0;
    var prompt = "Press any key to begin!";

    // select random word

    function newWord() {
        var html = "";
        for (var i = 0; i < randomWord.length; i++) {
            if (listLetters.indexOf(randomWord[i]) !== -1 || randomWord === " ") {
                html += randomWord[i].toUpperCase();
            }
            else {
                html += " _ ";
            }
        }
        console.log(html);
        currentWordElement.textContent = html;
    }

    // Start Over

    function newGame() {
        guessCountElement.innerHTML = maxAttempts;
        guessCount = 0;
        guessesRemaining = maxAttempts - guessCount;
        listLetters = [];
        lettersGuessedElement.innerHTML = "";
    }

    // play the game
    newWord();
    winCountElement.innerHTML = winCount;
    guessCountElement.innerHTML = guessesRemaining;


    document.onkeydown = function(e) {
        var theKey = e.key.toLowerCase();
        var theKeyCode = e.keyCode;

        if (theKeyCode >= 32 && theKeyCode <= 95 && listLetters.indexOf(theKey) === -1) {
            listLetters.push(theKey);

            if (randomWord.indexOf(theKey) === -1) {
                guessCount++;
            }

            guessesRemaining = maxAttempts - guessCount;

            if (guessesRemaining === 0) {
                newGame();
                randomWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
            } else {
                guessCountElement.innerHTML = guessesRemaining;
            }

            var html = "";
            for (var i = 0; i < listLetters.length; i++) {
                if (randomWord.indexOf(listLetters.length[i]) === -1) {
                    html += listLetters[i].toUpperCase();
                }
            }
            lettersGuessedElement.innerHTML = html;

            newWord();

            var renderedWord = document.getElementById("current-word").innerHTML;
            if (renderedWord.indexOf(" _ ") === -1) {
                wordComplete = true;
            }
        }
        if (wordComplete) {
            wordComplete = false;
            winCount++;
            winCountElement.innerHTML = winCount;
            newGame();
            randomWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
            newWord();
        }


        //count guesses


        //letters already guessed displayed



        //count wins


    }
}