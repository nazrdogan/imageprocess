var gm = require('gm');
gm('image.jpg').trim().write('trim.png', function (err) {
    if (!err) console.log('done');
    console.log(err);
});