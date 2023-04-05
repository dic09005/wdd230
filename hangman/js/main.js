
// *** Game Setup ***

let letters = document.getElementById("letters");
let prompt = document.getElementById("prompt");
let guessInput = document.getElementById("guessinput");
let button = document.getElementById("go");

//                                    //
//           The Game Loop            //
//                                    //

function getInput() {

    // Get the input element
    let input = document.getElementById("inputCat");

    // Get the value of the input element
    let value = input.value;
  
    // Store value in a variable
    let savedValue = value;


  //Start with getting the word from a JSON file

  const requestURL = 'json/words.json';
  const noun = document.querySelector('.word');

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
        // console.log(jsonObject); // temporary checking for valid response and data parsing
        const words = jsonObject[savedValue];
        // console.log(words) // checking for array format 

        let parts = ["head", "torso", "arm-l", "arm-r", "leg-l", "leg-r", "eye-l", "eye-r", "mouth"];

        // picks a word at random
        let word1 = words[Math.floor(Math.random() * words.length)];

        let word = word1.toLowerCase();

        // give me a list of empty letters for the word
        let answerArray = [];
        for (let i = 0; i < word.length; i++) {
          answerArray[i] = "_";
        }

        console.log(word) // For testing so I know the word :)

        // how many letters are left?
        let remainingLetters = word.length;

        console.log(remainingLetters) // For testing :)
        
        // while there are still letters to guess
        letters.innerHTML = answerArray.join(" ");
        let guess;
        let guessedLetters = [];

        if (remainingLetters > 0) {
          let submission = () => {
            let userInput = guessInput.value;
            let guess = userInput;

            
            guessedLetters.push(guess);

            console.log(guess); // logs guess

            let existingLetters = remainingLetters;

            console.log(guessedLetters);

            guessedLetters.pop(guess);

            if (guessedLetters.includes(guess)) {

              document.querySelector(".Alerts").innerHTML = "Please enter a different letter";

            } else {

              guessedLetters.push(guess);

              if (guess.length !== 1) {
                document.querySelector(".Alerts").innerHTML = "Please enter a single letter";
              
              } else {

                //update the game state with the guess
                for (let i = 0; i < word.length; i++) {
                  // if they were correct
                  if (word[i] === guess) {
                    answerArray[i] = guess;
                    letters.innerHTML = answerArray.join(" ");
                    remainingLetters--;
                  }
                }

                // If they got it wrong
                if (existingLetters === remainingLetters) {
                  
                  console.log(parts.length) //verify chances

                  // Print remaining chances to screen
                  let chancesLeft = parts.length
                  document.querySelector(".chancesLeft").innerHTML = chancesLeft;

                  // Check Progress
                  if (parts.length > 0) {
                    let part = document.getElementById(parts[0]);
                    part.style.display = "block";
                    parts.shift();
                  }
                  else {
                    document.querySelector(".Alerts").innerHTML = "You lost!";
                    // alert("You lost!");
                  }
                }

                // Print Message if all letters are guessed
                if (remainingLetters === 0) {
                  letters.innerHTML = answerArray.join(" ");
                  document.querySelector(".Alerts").innerHTML = "Good job! The answer was " + word;
                }
              }

            }

            // Here is where I take the guess value (the letter) 
            // and create a new element and append to new element.

            const list = document.querySelector('#lettersPicked')

            list.innerHTML = `<strong>${guessedLetters}</strong>`

          };

          // Make the Button Work
          button.addEventListener('click', submission, false)
        }

  })

}
