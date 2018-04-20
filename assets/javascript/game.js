var guessed = [];
var words = ["vaporwave", "aesthetic", "lofi", "music"];
var numTries = 10;


var currentWord = words[Math.floor(Math.random() * words.length)].split("");
var allowed = "abcdefghijklmnopqrstuvwxyz".split("");




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
            letter.innerHTML += event.key + " ";  
              
        }

        if (currentWord.includes(guess)){
            while (currentWord.indexOf(guess) != -1){
                currentWord.splice(currentWord.indexOf(guess),1);
            }
                                                        
        }
        else if (tried === false && numTries != 1){
            numTries --;
            document.getElementById("hang").setAttribute("src","assets/images/hang"+numTries+".gif");
        }
        
    }  
   
    
}

