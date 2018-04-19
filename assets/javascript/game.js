var guessed = [];
var words = ["vaporwave", "aesthetic", "lofi", "music"];
var numTries = 10;

var currentWord = words[Math.floor(Math.random() * words.length)].split("");
var allowed = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(currentWord);





document.onkeyup = function(event) {
     guess = event.key;

     
     if (allowed.includes(event.key)){     

        if (guessed.indexOf(guess) != -1){
            console.log("You already tried that");
        }
        else{
            guessed.push(guess);  
        }

        if (currentWord.includes(guess)){
            while (currentWord.indexOf(guess) != -1){
                currentWord.splice(currentWord.indexOf(guess),1);
            }
                                                        
        }
        else{
            numTries --;
        }

    }  
  
    
}

  // for x in the array, if the x is the key that's been press splice it out. 