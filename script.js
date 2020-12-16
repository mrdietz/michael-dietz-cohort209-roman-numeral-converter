

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

    var decValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var result = "";

    for (var i = 0; i < decValue.length; i++) {
        while (decValue[i] <= num) {
            result += romanNum[i];
            num -= decValue[i];
        }
    } 
    document.getElementById("romanized").innerHTML = result;
};



