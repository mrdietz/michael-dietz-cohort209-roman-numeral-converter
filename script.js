

function randomRoman() {
    let famousRomans = ['Nero', 
                        'Commodus', 
                        'Tiberius Gracchus', 
                        'Constantine', 
                        'Cicero', 
                        'Caesar', 
                        'Spartacus', 
                        'Augustus', 
                        'Marcus Aurelius'];

    let randomRoman = famousRomans[Math.floor(Math.random() * famousRomans.length)];
    document.getElementById("randomRoman").innerHTML = randomRoman + ' would say...';
};

function convertToRoman(num) {
    num = document.getElementById('userInput').value;

    var decValue = [1000000, 
                    900000, 
                    500000, 
                    400000, 
                    100000, 
                    90000, 
                    50000, 
                    40000, 
                    10000, 
                    9000, 
                    5000, 
                    4000, 
                    1000, 
                    900, 
                    500, 
                    400, 
                    100, 
                    90, 
                    50, 
                    40, 
                    10, 
                    9, 
                    5, 
                    4, 
                    1];

    var romanNum = ['M\u0305', 
                    'C\u0305M\u0305', 
                    'D\u0305', 
                    'C\u0305D\u0305', 
                    'C\u0305', 
                    'X\u0305C\u0305', 
                    'L\u0305', 
                    'X\u0305L\u0305', 
                    'X\u0305', 
                    'I\u0305X\u0305', 
                    'V\u0305', 
                    'I\u0305V\u0305', 
                    'M', 
                    'CM', 
                    'D', 
                    'CD', 
                    'C', 
                    'XC', 
                    'L', 
                    'XL', 
                    'X', 
                    'IX', 
                    'V', 
                    'IV', 
                    'I'];
    var result = "";

    for (var i = 0; i < decValue.length; i++) {
        while (decValue[i] <= num) {
            result += romanNum[i];
            num -= decValue[i];
        }
    } 
    document.getElementById("romanized").innerHTML = result;
};



