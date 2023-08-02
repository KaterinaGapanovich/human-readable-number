module.exports = function toReadable(number) {

    let dozens_words;
    let number_words = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        19: 'nineteen',
        18: 'eighteen',
        19: 'nineteen'};

    if (20 <= number) {
        dozens_words = {
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety'};

        const num = String(number).split('');
        if (num.length === 2)
            if (number % 10 == 0) {
                return dozens_words[number];}
            else {
                if (num[0] == 2) {
                    return 'twenty' + ' ' + number_words[num[1]];
                }
                if (num[0] == 3) {
                    return 'thirty' + ' ' + number_words[num[1]];
                }
                if (num[0] == 4) {
                    return 'forty' + ' ' + number_words[num[1]];
                }
                if (num[0] == 5) {
                    return 'fifty' + ' ' + number_words[num[1]];
                }
                if (num[0] == 6) {
                    return 'sixty' + ' ' + number_words[num[1]];
                }
                if (num[0] == 7) {
                    return 'seventy' + ' ' + number_words[num[1]];
                }
                if (num[0] == 8) {
                    return 'eighty' + ' ' + number_words[num[1]];
                }
                if (num[0] == 9) {
                    return 'ninety' + ' ' + number_words[num[1]];
                }
            }

        if (num.length === 3)
            if (number % 100 != 0) {
                if (number % 10 === 0)
                    if (num[1] != 2) {
                        if (num[1] != 3) {
                            if (num[1] == 4) {
                                return number_words[parseInt(num[0])] + ' hundred ' + dozens_words[40];
                            }
                            if (num[1] == 5) {
                                return number_words[parseInt(num[0])] + ' hundred ' + dozens_words[50];
                            }
                            if (num[1] == 6) {
                                return number_words[parseInt(num[0])] + ' hundred ' + dozens_words[60];
                            }
                            if (num[1] == 7) {
                                return number_words[parseInt(num[0])] + ' hundred ' + dozens_words[70];
                            }
                            if (num[1] == 8) {
                                return number_words[parseInt(num[0])] + ' hundred ' + dozens_words[80];
                            }
                            if (num[1] == 9) {
                                return number_words[parseInt(num[0])] + ' hundred ' + dozens_words[90];
                            }
                        } else {
                            return number_words[parseInt(num[0])] + ' hundred ' + dozens_words[30];
                        }
                    } else {
                        return number_words[parseInt(num[0])] + ' hundred ' + dozens_words[20];
                    }
                if (num[1] == 0) {
                    return number_words[parseInt(num[0])] + ' hundred ' + number_words[num[2]];
                }
                if (num[1] == 1) {
                    if (num[2] == 0) {
                        return number_words[parseInt(num[0])] + ' hundred ' + number_words[10];
                    }
                    if (num[2] == 1) {
                        return number_words[parseInt(num[0])] + ' hundred ' + number_words[11];
                    }
                    if (num[2] == 2) {
                        return number_words[parseInt(num[0])] + ' hundred ' + number_words[12];
                    }
                    if (num[2] == 3) {
                        return number_words[parseInt(num[0])] + ' hundred ' + number_words[13];
                    }
                    if (num[2] == 4) {
                        return number_words[parseInt(num[0])] + ' hundred ' + number_words[14];
                    }
                    if (num[2] == 5) {
                        return number_words[parseInt(num[0])] + ' hundred ' + number_words[15];
                    }
                    if (num[2] == 6) {
                        return number_words[parseInt(num[0])] + ' hundred ' + number_words[16];
                    }
                    if (num[2] == 7) {
                        return number_words[parseInt(num[0])] + ' hundred ' + number_words[17];
                    }
                    if (num[2] == 8) {
                        return number_words[parseInt(num[0])] + ' hundred ' + number_words[18];
                    }
                    if (num[2] == 9) {
                        return number_words[parseInt(num[0])] + ' hundred ' + number_words[19];
                    }
                }
                if (num[1] == 2) {
                    return number_words[parseInt(num[0])] + ' hundred ' + dozens_words[20] + ' ' + number_words[num[2]];
                }
                if (num[1] == 3) {
                    return number_words[parseInt(num[0])] + ' hundred ' + dozens_words[30] + ' ' + number_words[num[2]];
                }
                if (num[1] == 4) {
                    return number_words[parseInt(num[0])] + ' hundred ' + dozens_words[40] + ' ' + number_words[num[2]];
                }
                if (num[1] == 5) {
                    return number_words[parseInt(num[0])] + ' hundred ' + dozens_words[50] + ' ' + number_words[num[2]];
                }
                if (num[1] == 6) {
                    return number_words[parseInt(num[0])] + ' hundred ' + dozens_words[60] + ' ' + number_words[num[2]];
                }
                if (num[1] == 7) {
                    return number_words[parseInt(num[0])] + ' hundred ' + dozens_words[70] + ' ' + number_words[num[2]];
                }
                if (num[1] == 8) {
                    return number_words[parseInt(num[0])] + ' hundred ' + dozens_words[80] + ' ' + number_words[num[2]];
                }
                if (num[1] == 9) {
                    return number_words[parseInt(num[0])] + ' hundred ' + dozens_words[90] + ' ' + number_words[num[2]];
                }
            } else {
                return number_words[parseInt(num[0])] + ' hundred';
            }
    } else {
        return number_words[number];
    }

}
