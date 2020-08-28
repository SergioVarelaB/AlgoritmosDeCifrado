const crypto = require('crypto');


function encode(text, key){
    const myKey = crypto.createCipher('aes-128-cbc', key);
    let mystr = myKey.update(text, 'utf8' , 'hex');
    mystr += myKey.final('hex');
    return (mystr)
}


function decode(message, key){
    const mykey = crypto.createDecipher('aes-128-cbc', key);
    let mystr = mykey.update(message, 'hex' , 'utf8');
    mystr += mykey.final('utf8');
    return(mystr);

}

const key = "UltrasecretKey";
let value = encode("MySeccretKey", key);
console.log(`El mensaje cifrado es: ${value}`);


value = decode(value,key)
console.log(`El mensaje original es:${value}`);

