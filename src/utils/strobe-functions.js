function getColorsAndWords(colorArray) {
    var colorDictionary = {
        blue: '#4183D7',
        purple: '#BD6BFF',
        red: '#E75656',
        green: '#47DF8F',
        yellow: '#F5E653',
        orange: '#F39C12',
    };
    var colors = [];
    colorArray.forEach((color) => {
        var colorValue = Object.keys(color)[0];
        if (Object.values(color)[0].selected) {
            colors.push({
                color: colorDictionary[colorValue],
                word: Object.values(color)[0].word,
            });
        }
    });
    return colors;
}

function getRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

export {getColorsAndWords, getRandomColor};
