function reverseWords(teks) {
    const reverseWordArr = teks.split(" ").reverse();
    return reverseWordArr.join(" ");
}

console.log(reverseWords('Selamat Pagi Semuanya'));