/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import { writeFile } from 'fs';


inquirer.prompt([{"message": "What is the URL?", "name": "url"}], {"key": "url"} ).then((answers) => {
    const url = answers.url
    const qrImage = qr.imageSync(url)
    writeFile("qrCode.png", qrImage, (err) => {
        if (err) throw err;
        console.log("The file has been saved!")
        console.log(url)
})
})

