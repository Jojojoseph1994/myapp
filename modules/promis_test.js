var fs = require("fs");
var fs_read = new Promise((resolve, reject) => {
    fs.readFile('./public/welcome.txt', function (err, data) {
        if (err) {
            reject(err);
        }
        resolve(data.toLocaleString());
    })
});
module.exports = fs_read;