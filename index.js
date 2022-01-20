
 number = function toReadable(n1) {
    let x = '';
    let razrad = 0;
    let number = 0;
    const str = String(n1);                          // перевод числа в строку
    const arr1 = Array.from(String(str), Number);    // перевод строки в числовой массив
    for (let i = 0; i < arr1.length; i++) {          // расчет количества разрядов у числа
        razrad = razrad + 1;
    }
    number = razrad;

    if (razrad === 4) {
        switch(arr1[number-razrad]) {
            case 0:
                x = x + '';
                break;
            case 1:
                x = x + 'одна тысяча ';
                break;
            case 2:
                x = x + 'две тысячи ';
                break;
            case 3:
                x = x + 'три тысячи ';
                break;
            case 4:
                x = x + 'четыре тысячи ';
                break;
            case 5:
                x = x + 'пять тысяч ';
                break;
            case 6:
                x = x + 'шесть тысяч ';
                break;
            case 7:
                x = x + 'семь тысяч ';
                break;
            case 8:
                x = x + 'восемь тысяч ';
                break;
            case 9:
                x = x + 'девять тысяч ';
                break;
        }
    }  

    if (x != ''){
        razrad = razrad - 1;
    } 

    if (razrad === 3) {
        switch(arr1[number-razrad]) {
            case 0:
                x = x + '';
                break;
            case 1:
                x = x + 'сто ';
                break;
            case 2:
                x = x + 'двести ';
                break;
            case 3:
                x = x + 'триста ';
                break;
            case 4:
                x = x + 'четыреста ';
                break;
            case 5:
                x = x + 'пятьсот ';
                break;
            case 6:
                x = x + 'шестьсот ';
                break;
            case 7:
                x = x + 'семьсот ';
                break;
            case 8:
                x = x + 'восемьсот ';
                break;
            case 9:
                x = x + 'девятьсот ';
                break;
        }
    }   
  
    if (x != ''){
        razrad = razrad - 1;
    } 
       
    if (razrad === 2 && arr1[number-razrad] === 1) {
        switch(10 *arr1[number-razrad] + arr1[number-1]) {   //созд. двузначного числа из 2-х последних эл массива
            case 10:
                x = x + 'десять';
                break;
            case 11:
                x = x + 'одиннадцать';
                break;
            case 12:
                x = x + 'двенадцать';
                break;
            case 13:
                x = x + 'тринадцать';
                break;
            case 14:
                x = x + 'четырнадцать';
                break;
            case 15:
                x = x +'пятнадцать';
                break;
            case 16:
                x = x + 'шестнадцать';
                break;
            case 17:
                x = x + 'семьнадцать';
                break;
            case 18:
                x = x + 'восемьнадцать';
                break;
            case 19:
                x = x + 'девятнадцать';
                break;
        }
    } 
   
    if (razrad === 2 && arr1[number-razrad] != 1) {
        switch(arr1[number-razrad]) {
            case 0:
                x = x + '';
                break;
            case 2:
                x = x + 'двадцать ';
                break;
            case 3:
                x = x + 'тридцать ';
                break;
            case 4:
                x = x + 'сорок ';
                break;
            case 5:
                x = x + 'пятьдесят ';
                break;
            case 6:
                x = x + 'шестьдесят ';
                break;
            case 7:
                x = x + 'семьдесят ';
                break;
            case 8:
                x = x + 'восемьдесят ';
                break;
            case 9:
                x = x + 'девяносто ';
                break;
        }

        if (x != ''){
            razrad = razrad-1;
        } 
    
        if(razrad === 1 ) {
            switch(arr1[number-razrad]) {
                case 0:
                    x = x + 'ноль';
                    break;
                case 1:
                    x = x + 'один';
                    break;
                case 2:
                    x = x + 'два';
                    break;
                case 3:
                    x = x + 'три';
                    break;
                case 4:
                    x = x + 'четыре';
                    break;
                case 5:
                    x = x + 'пять';
                    break;
                case 6:
                    x = x + 'шесть';
                    break;
                case 7:
                    x = x + 'семь';
                    break;
                case 8:
                    x = x + 'восемь';
                    break;
                case 9:
                    x = x + 'девять';
                    break;
            }
        } 
    }
console.log(x);
} 
number(1313);
//// node index.js
