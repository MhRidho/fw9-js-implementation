function reverseWords(teks) {
    const reverseWordArr = teks.split(" ").map(word => word.split("").reverse().join(""));
    return reverseWordArr.join(" ");
}

console.log(reverseWords('Selamat Pagi'));