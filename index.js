const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});

key.generateKeyPair();


const PublicDer = key.exportKey('public');
const privateDer = key.exportKey('private');

const text = 'secret information  ';
const encrypted = key.encrypt(text, 'base64');

console.log(`Value encrypted ${encrypted}`)

const decrypted = key.decrypt(encrypted,"utf8");
console.log(`Value decrypted ${decrypted}`)