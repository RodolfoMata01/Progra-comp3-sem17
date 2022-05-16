var fs = require('fs');
var xlsx = require('xlsx');

const readLine = require('readline');

let write = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});


write.question("Que documento desea leer 1:xlsx, 2:cvs , 3:txt: ", (action) => {
    console.log("");

    if (accion == 1) {

        console.log("");

        fs.readFile('./animes.xlsx', 'utf-8', (err, data) => {
            if(err) {
                console.log('error', err);
            }else{
                console.log(data);
            }
        });

    }else if (accion == 2){

        console.log("");

        fs.readFile('./list.csv', 'utf-8', (err, data) => {
            if(err) {
                console.log('error', err);
            }else{
                console.log(data);
            }
        });

    }else if (accion == 3){


        console.log("");
        
        fs.readFile('./electro.txt', 'utf-8', (err, data) => {
            if(err) {
                console.log('error', err);
            }else{
                console.log(data);
            }
        });

    }
});
