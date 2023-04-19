const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^0-9a-z]/g, "");
    return str === Array.from(str).reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
