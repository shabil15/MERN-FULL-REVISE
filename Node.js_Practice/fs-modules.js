const fs = require('fs');

// delele file
// fs.unlink('newFile.text',(err)=>{
//     if(err){
//         console.log('hi');
//         console.log(err);
//     }else{
//         console.log('done');
//     }
// })

// fs.unlink('new.txt',(err)=>{
//     if(err){
//         console.log('hi');
//         console.log(err);
//     }else{
//         console.log('done');
//     }
// })



// create new file
// fs.writeFile('new.txt','new one',(err)=>{
//     if(err){
//         console.log(err);
//     }
// })

// fs.writeFile('new.txt','new One',(err)=>{
//     if(err){
//         console.log(err);
//     }
// })

// // read file
// fs.readFile('new.txt','utf-8',(err, data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         // read old file and create new file with the data
//         fs.writeFile('copyFile.txt',data,(err)=>{
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log('done');
//             }
//         })
//     }
// })


fs.readFile('C:/Users/SHABIL/Desktop/MERN FULL REVISE/JavaScript-Study/closure.js','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})



// // Specify the directory path
// const directoryPath = '/Users/hp/OneDrive/Desktop/Coding/Node.js/Practice';

// // Use fs.readdir() to get a list of all files in the directory
// fs.readdir(directoryPath,(err, file)=>{
//     if(err){
//         console.log(err);
//     }else{
//         file.forEach((files)=>console.log(files))
//     }
// })
