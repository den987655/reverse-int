module.exports = function reverse (n) {
    const reveredNumber = n.toString().split('').reverse().join('');
    return parseInt(reveredNumber)*Math.sign(n);
}
