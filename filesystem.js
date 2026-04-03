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
cpFile();