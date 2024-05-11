const {readFileSync, writeFileSync} = require('fs');

let content = readFileSync('./Pakistan.txt', 'UTF8');



if(content === 'Dil Dil Pakistan') {
    writeFileSync('./Pakistan.txt', 'Islamia Jambhuria Pakistan')
} else {
    writeFileSync('./Pakistan.txt', 'Dil Dil Pakistan')
}
let contentNew = readFileSync('./Pakistan.txt', 'UTF8');

console.log(`Content was "${content}". Now, Node has changed it to "${contentNew}". You can check...`);
