module.exports = function toReadable (number) {
    let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 
            'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']; 
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let string = number.toString();

    if(string == 0)
        return 'zero';


    if(string < 20 ){
        return units[string];
    }

    if(string.length === 2){
        return (tens[string[0]] + ' ' + units[string[1]]).trim();
    }

    if(string.length === 3){
        if(string[1] === '0' && string[2] === '0')
            return units[string[0]] + ' hundred';
        else {
            return units[string[0]] + ' hundred ' +  toReadable(+(string[1]  +  string[2]));
        }
    }
} 