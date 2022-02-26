module.exports = function toReadable (number) {
    const ones = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        " ",
        " ",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number < 10) {
        return ones[number];
    } else if (number >= 10 && number < 20) {
        return teens[number % 10];
    } else if (number >= 20 && number < 100) {
        let one = "";
        if (number % 10 > 0) {
            one = " " + ones[number % 10];
        }
        return tens[(number - (number % 10)) / 10] + one;
    } else {
        let one = "";
        let ten = "";

        if (number % 100 >= 10 && number % 100 < 20) {
            ten = " " + teens[number % 10];
        } else if (number % 100 >= 20) {
            if ((number % 100) % 10 > 0) {
                one = " " + ones[(number % 100) % 10];
            }
            ten = " " + tens[((number % 100) - (number % 10)) / 10] + one;
        } else {
            if ((number % 100) % 10 > 0) {
                ten = " " + ones[(number % 100) % 10];
            }
        }

        return ones[(number - (number % 100)) / 100] + " hundred" + ten;
    }
}

