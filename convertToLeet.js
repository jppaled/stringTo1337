function convertToLeet(sentence) {
    const leetDictionnary = {
        "a": "4",
        "b": "8",
        "c": "(",
        "d": "[)",
        "e": '3',
        "f": "|=",
        "g": "6",
        "h": "#",
        "i": "I",
        "J": "_|",
        "k": "|<",
        "l": "1",
        "m": "|v|",
        "n": "^/",
        "o": "0",
        "p": "|*",
        "q": "(_,)",
        "r": "2",
        "s": "5",
        "t": "7",
        "u": "|_|",
        "v": "\/",
        "w": "\/\/",
        "x": "><",
        "y": "`/",
        "z": "7_",
        " ": " ",
    }

    let leetSentence = '';

    for (let i = 0; i < sentence.length; i++) {
        let character = sentence.charAt(i).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        let leetChar = isLetter(character) ? leetDictionnary[character] : character;
       
        leetSentence += leetChar;
    }

    return leetSentence;
}

function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
}