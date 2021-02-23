const fs = require('fs');

var obj = JSON.parse(fs.readFileSync('data.json', 'utf8'));


obj.forEach(element => {
    // console.log(element.mass);
    if (element.mass > 1000 && element.category === "Cavalry") {
        console.log(element.name + ' ' + element.mass);
    }
});
