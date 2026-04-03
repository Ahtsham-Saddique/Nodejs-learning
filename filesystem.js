// // CJS+CALLBACK\\
// const fs = require('node:fs');


// fs.readFile('./a.txt','UTF-8',(err,data)=>
//             {
//                 if(err)
//                 {
//                     console.log("Error :",err);
//                     return
//                 }
//                 console.log(("File Content: ",data))

//             }
            
//             );

//         console.log("Program continues ............");
// ESM+promises
import { copyFile } from 'node:fs';
import * as fs from 'node:fs/promises';


async function appendfile()
{
    try 
    {
        await fs.appendFile("./a.txt","\n I have specialized in backend development");
        console.log("Append Sucessfull");
    }
    catch(error)
    {
        console.log("Error : ", error);
    }

}

// appendfile();

async function writeFile()
{
    try{
        fs.writeFile("a.txt","Hi this Sham tech,how can we help you?");
        
    console.log("OPration i sperforming.......");
        console.log("Written Sucessfully");
    }
    catch(error)
    {
        console.log("Error : " , error);
    }

}

// writeFile();

// copyFile

async function cpFile()
{
    try 
    {
        fs.copyFile("a.txt","b.txt");
        console.log("Sucessfully copied"); 
    }
    catch(err)
    {
        console.log("Error :", err);
    }
}
// cpFile();

async function dlt()
{
    try 
    {
         fs.unlink("b.txt");
         console.log("Sucessfully deleted");
    }
    catch(err)
    {
        console.log("Error in deletion:", err);
    }
}
// dlt();

async function createFold()
{
    try 
    {
         fs.mkdir("./folder");
         console.log("Sucessfully created");
    }
    catch(err)
    {
        console.log("Error in creation:", err);
    }
}
// createFold();

async function createFil()
{
    try 
    {
         fs.rm("b.txt");
         console.log("Sucessfully deleted");
    }
    catch(err)
    {
        console.log("Error in creation:", err);
    }
}
// createFil();



async function readFolder() {
    try {
        const files = await fs.readdir("folder");
        console.log('Files in folder:', files);
    } catch (err) {
        console.error('Error reading folder:', err);
    }
}

async function main() {
    
    await readFolder();
}

main();


