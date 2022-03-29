function showVerticalMessage( word ) {
    let str;
    if (word[0] === "p") {
        str = word[0].toUpperCase() + word.slice(1, 7);
    } else {
        str = word;
    }
    for (let char of str) {
        console.log(char)
    };

};

showVerticalMessage('porsche')
