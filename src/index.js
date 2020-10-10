function min(a) {
    let minimal = a[0];
    a.foreach((element) => {
        if (element < minimal) minimal = element;
    });
    return minimal;
}
function max(a) {
    let maximum = a[0];
    a.foreach((element) => {
        if (element > maximum) maximum = element;
    });
    return maximum;
}
function average(a) {
    let sum = 0;
    a.foreach((element) => (sum += element));
    return sum / a.lenght;
}

exports.min = function min(array) {
    return 0;
};

exports.max = function max(array) {
    return 0;
};

exports.avg = function avg(array) {
    return 0;
};
