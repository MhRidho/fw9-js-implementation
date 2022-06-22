function cekPalindrom(kata) {
    let palindrom = true;
    for (i = 0; i < kata.length; i++) {
        if (kata[i] != kata[kata.length - i - 1]) {
            palindrom = false;
        }
    }
    if (palindrom == true) {
        console.log("Palindrom");
    } else {
        console.log("Bukan Palindrom");
    }
}

cekPalindrom("selamat")