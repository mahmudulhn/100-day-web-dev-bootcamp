const fs = require('fs/promises');

async function readFile() {
    // const fileData = fs.readFile('data.txt', function (error, fileData) {
    //     console.log(fileData.toString());
    //     console.log('done');
    // });

    const fileData = await fs.readFile('data.txt')
    console.log(fileData.toString());
    console.log('done');


    console.log('hi there');

}

readFile();