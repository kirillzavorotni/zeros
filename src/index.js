module.exports = function getZerosCount(number) {
    var counter = 0;
    var i = 5;
    do {
        var result = Math.floor(number / i);
        counter += result;
        i *= 5;
    } while(result > 1);
    return counter;
}
