var guessed = [];
var words = ["vaporwave", "aesthetic", "lofi", "music", "radio", "chill","nineties"];
var numTries = 10;


var currentWord = words[Math.floor(Math.random() * words.length)].split("");
var allowed = "abcdefghijklmnopqrstuvwxyz".split("");
var wordLetters = []

var points = 0;

for (i in currentWord){
    wordLetters.push("_");
}

document.getElementById("blank").innerHTML = wordLetters.join(" ")



document.onkeyup = function(event) {
     guess = event.key;
     var tried = false
     var letter = document.getElementById("letters");


     
     if (allowed.includes(event.key)){     

        if (guessed.indexOf(guess) != -1){
            console.log("You already tried that");
            tried = true;
        }

        else{
            guessed.push(guess);
              
        }

        if (currentWord.includes(guess)){
            while (currentWord.indexOf(guess) != -1){
                console.log(currentWord)
                var position = currentWord.indexOf(guess)
                currentWord.splice(position,1," ");
                wordLetters.splice(position,1,guess)
                document.getElementById("blank").innerHTML = wordLetters.join(" ")
                console.log(wordLetters.join(" "))
                points++
            }
                                                        
        }
        else if (tried === false && numTries != 1){
            numTries --;
            document.getElementById("hangman").setAttribute("src","assets/images/hang"+numTries+".gif");
            letter.innerHTML += event.key + " ";
        }

        
        
        
    }
    if (points === currentWord.length){
        alert("Congrats! you won! Please refresh to try again")
    }
    else if (numTries === 1){
        alert("You lost...Please refresh to try again!")
    }  
   
    
}

