function covertToAlphabetical() {
    let sentence = document.getElementById("leetSentence").value;
    
    const alphabeticalDictionnary = {
        "4": "a",
        "8": "b",
        "(": "c",
        "[)": "d",
        "3": "e",
        "|=": "f",
        "6": "g",
        "#": "h",
        "I": "i",
        "_|": "j",
        "|<": "k",
        "1": "l",
        "|v|": "m",
        "^/": "n",
        "0": "o",
        "|*": "p",
        "(_,)": "q",
        "2": "r",
        "5": "s",
        "7": "t",
        "|_|": "u",
        "\\\/": "v",
        "\\\/\\\/": "w",
        "><": "x",
        "`/": "y",
        "7_": "z",
        " ": " ",
    }

    let alphabeticalSentence = '';

    for (let i = 0; i < sentence.length; i++) {
        let character = sentence.charAt(i);
        let nextCharacter = sentence.charAt(i + 1);
        let thirdCharacter = sentence.charAt(i + 2);
        let fourthCharacter = sentence.charAt(i + 3);
       
        if (character === '(' && nextCharacter === "_") {
            alphabeticalSentence += alphabeticalDictionnary["(_,)"];  // q
            
            i = i + 3;       
        } else if (character === "[") {
            alphabeticalSentence += alphabeticalDictionnary["[)"]; // d
            
            i++;
        } else if (character === "^") {
            alphabeticalSentence += alphabeticalDictionnary["^/"]; // n

            i++;
        } else if (character === "|") {
            if(nextCharacter === "=") {
                alphabeticalSentence += alphabeticalDictionnary["|="]; // f
                
                i++;
            } else if (nextCharacter === "<") {
                alphabeticalSentence += alphabeticalDictionnary["|<"]; // k
                
                i++;
            } else if (nextCharacter === "v") {
                alphabeticalSentence += alphabeticalDictionnary["|v|"]; // m
                
                i = i + 2
            } else if (nextCharacter === "*") {
                alphabeticalSentence += alphabeticalDictionnary["|*"]; // p

                i++;
            } else if (nextCharacter === "_") {
                alphabeticalSentence += alphabeticalDictionnary["|_|"]; // u

                i = i + 2;
            }
        } else if (character === "_") {
            alphabeticalSentence += alphabeticalDictionnary["_|"]; // j

            i++;
        } else if (character === "7" && nextCharacter == "_") {
            alphabeticalSentence += alphabeticalDictionnary["7_"]; // z
            
            i++;
        } else if (character + nextCharacter === "\\\/") {
            if(thirdCharacter + fourthCharacter === "\\\/") {
                alphabeticalSentence += alphabeticalDictionnary["\\\/\\\/"]; // w
                
                i = i + 3;
            } else {
                alphabeticalSentence += alphabeticalDictionnary["\\\/"]; // v
                
                i++;
            }
        } else if (character === ">") {
            alphabeticalSentence += alphabeticalDictionnary["><"]; // x

            i++;
        } else if (character === "`") {
            alphabeticalSentence += alphabeticalDictionnary["`/"]; // y

            i++;
        } else if (alphabeticalDictionnary[character]) {
            alphabeticalSentence += alphabeticalDictionnary[character]; // all other character
        } else {
            alphabeticalSentence += character;
        }
    }

    let p = document.getElementById('alphabetical');

    p.innerHTML = alphabeticalSentence;
}
