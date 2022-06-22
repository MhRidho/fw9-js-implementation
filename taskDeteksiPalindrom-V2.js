function isPalindrom(teks) {
    teks = teks.toLowerCase();
    const charactersArr = teks.split("");
    const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

    const lettersArr = [];
    charactersArr.forEach((char) => {
        if (validCharacters.indexOf(char) > -1) (lettersArr.push(char))
    });
    const state = lettersArr.join("") === lettersArr.reverse().join("");
    if (state) {
        console.log('Palindrom');
    } else {
        console.log('Not Palindrom');
    }
}

isPalindrom("Selamat Malam");