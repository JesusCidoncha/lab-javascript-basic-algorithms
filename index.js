// Iteration 1: Names and Input
let hacker1 = "Jesus"
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Nadjim"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)

}else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} character`)
}else{
    console.log(`ow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let driverAllCaps ="";
for (let i = 0; i < hacker1.length; i++) {
  driverAllCaps += hacker1[i].toUpperCase() + " ";

}
  console.log(driverAllCaps); 
let navigatorBackwards ="";
  for (let j = hacker2.length - 1 ; j >= 0; j--) {
    navigatorBackwards += hacker2[j];
  
  }
    console.log(navigatorBackwards); 

    let comparisonResult = hacker1.localeCompare(hacker2);

    if (comparisonResult < 0) {
        console.log(`The driver's name goes first.`);
      } else if (comparisonResult > 0) {
        console.log(`Yo, the navigator goes first, definitely.`);
      } else {
        console.log(`What?! You both have the same name?`);
      }


      //Iteration 4: Bonus1 loren ipsum ft. chatgpt (not a lot just had a messier execution)

      const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id augue lorem. Praesent feugiat dui elit. Vestibulum id neque tellus. Pellentesque eleifend dolor sit amet posuere porta. Sed ut nisi ac nulla commodo efficitur tincidunt in libero. Fusce at dapibus massa. Phasellus dignissim turpis vel mattis vulputate. Aenean non tortor lorem. Vivamus sagittis lorem quis ipsum lobortis egestas.

      Sed fringilla pharetra felis, eget mattis eros lacinia sit amet. Fusce auctor nisl et erat sollicitudin pharetra. Nullam eu est quis mi aliquet tincidunt ut nec orci. Quisque a commodo nisi. Nullam sagittis, nulla quis maximus pharetra, nisl lacus auctor metus, at consectetur metus diam placerat dolor. Sed tempus fermentum urna, ac iaculis urna volutpat ut. Maecenas lacinia tortor vel ligula facilisis tincidunt. Donec imperdiet fringilla lectus vel dignissim.
      
      Donec imperdiet nisi lacinia urna tempus, non efficitur odio convallis. Aenean egestas lobortis purus, non mollis ante scelerisque aliquam. Donec ac tincidunt quam. Vestibulum rhoncus nec enim sed lacinia. Aliquam ac purus tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque non metus ut tellus convallis porttitor vel a nulla. Integer non consequat lacus. In ac eleifend purus, et dictum orci. Sed sollicitudin nisi lacus, vitae porttitor dolor blandit eget.`   

      //checks if the character is a letter
      function isALetter(x) {

        return /^[a-zA-Z]$/.test(x);
      }

      let countWords = 0;
      let isInsideWord = false;
      let countTargetWord = 0;
      let targetWord = "et";
      let currentWord = "";

      for (let index = 0; index < longText.length; index++) {
        if (isALetter(longText[index])) {
          // if the current character is a letter, mark that we are inside a word
          isInsideWord = true;
          //if it is a word we store it to check if its "et"
          currentWord += longText[index];
        } else {
          // if the current character is not a letter
          if (isInsideWord) {
            //we equal the word we took to the word we are targeting
            if (currentWord.toLowerCase() === targetWord.toLowerCase()) {
                countTargetWord++;
              }
            // if we were inside a word and now encountered a non-letter character, it means the word ended
            countWords++;

            //then we reset the values
            isInsideWord = false;
            currentWord = "";
          }
        }
      }
      console.log(countWords);
      console.log(`the word ${targetWord} is used ${countTargetWord} times in this text`);
    

      //Iteration 5: Palindrome check

      const phraseToCheck = "Roma ni se cononoce sin oro, ni se conoce sin amor";
      function isAPalindrome(phraseToCheck){
        let phrase = "";
        //we turn the phrase into a simpler version without spaces in lowercase to make the check easier
        for (let index2 = 0; index2 < phraseToCheck.length; index2++) {
            if (isALetter(phraseToCheck[index2])) {
              phrase += phraseToCheck[index2].toLowerCase();
            }
        }
      
      //we initialize 2 variables to check the beggining and end of the sentence
      let left = 0
      let right = phrase.length -1;
        //loop to see if a character on the left is equal to the one on the right (beggining and end)
      while(left < right){
        //we move both variables to opposites sides to keep checking each character
       
        if(phrase[left] !== phrase[right]){
            //if it does not match, we return a false
            return false

        } 
        left ++;
        right --;
      
    }
    //if it ends the loop without returning a false, we can say that the phrase is really a palindrome
    return true
}
console.log(isAPalindrome(phraseToCheck));