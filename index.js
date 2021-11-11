const url = "/слободан-илинчић-/2093";

var chars = {
    'а':'a', 
    'б':'b', 
    'в':'v', 
    'г':'g',
    'д':'d',
    'ђ':'dj',
    'е':'e', 
    'ж':'z', 
    'з':'z', 
    'и':'i',
    'ј':'j',
    'к':'k', 
    'л':'l', 
    'љ':'lj', 
    'м':'m', 
    'н':'n',
    'њ':'nj',
    'о':'o',
    'п':'p', 
    'р':'r', 
    'с':'s', 
    'т':'t',
    'ћ':'c',
    'у':'u',
    'ф':'f', 
    'х':'h', 
    'ц':'c', 
    'ч':'c',
    'џ':'dz',
    'ш':'s',
    'č':'c',
    'ć':'c',
    'đ':'dj',
    'š':'s',
    'ž':'z'
};
var s = 'сЛОбодан-илинчић';
s = s.toLowerCase().replace(/[абвгдђежзијклљмнњопрстћуфхцчџшčćđšž]/g, m => chars[m]);