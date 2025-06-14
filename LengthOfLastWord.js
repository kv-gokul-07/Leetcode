var lengthOfLastWord = function(s) {

        const splittedText = s.trim().split(" ");

        let n = 0;

    for(let i = 0; i <= splittedText.length - 1; i++) {
        if(i === splittedText.length - 1) {
           n =  splittedText[i].length
        }
    }
    return n

};


console.log(lengthOfLastWord("   fly me   to   the moon  "));