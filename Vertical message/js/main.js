function showVerticalMessage( word ) {
    const ord = word[1] + word[2] + word[3] + word[4] + word[5] + word[6];
    let str;
    if (word[0] === "p") {
        str = word[0].toUpperCase() + ord;
    } else {
        str = word;
    }
    for (let char of str) {
        console.log(char)
    };

};

showVerticalMessage('porsche')
