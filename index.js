/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
    .prompt([
        {"message":"Type the URL you want to convert to a QR code:", 
        "name": "url"}
    ])
    .then((answers)=>{
        const url = answers.url;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr_code.png"));
        fs.writeFile("URL.txt", url, (err) => {
            if (err) {
                console.error("Error writing to file:", err);
            } else {
                console.log("URL saved to URL.txt");
            }
        });
        console.log("Generating QR code for:", answers.url);
    })
    .catch((error)=>{
        console.error("Error during inquirer prompt:", error);
    });