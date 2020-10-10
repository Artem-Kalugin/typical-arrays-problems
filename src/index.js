exports.min = function min(array) {
    let minimal = a[0];
    array.foreach((element) => {
        if (element < minimal) minimal = element;
    });
    return minimal;
};

exports.max = function max(array) {
    let maximum = a[0];
    array.foreach((element) => {
        if (element > maximum) maximum = element;
    });
    return maximum;
};

exports.avg = function avg(array) {
    let sum = 0;
    array.foreach((element) => (sum += element));
    return sum / a.lenght;
};
