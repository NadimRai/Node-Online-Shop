// const products = [];
const fs = require('fs');
const path = require('path');
const productDir = require('../util/path');

module.exports = class Product{
    constructor(title){
        this.title = title;
    }

    save(){
        // products.push(this);
        const p = path.join(productDir, 'data','products.json');
        fs.readFile(p, (err,filecontent) =>{
            let products = [];
            if(!err){
                products = JSON.parse(filecontent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products),(err) =>{
                console.log(err);
            })
        })
        
    }

    static fetchAll(cb){
        const p = path.join(productDir, 'data','products.json');
       fs.readFile(p,(err, filecontent) =>{
           if(err){
               cb([]);
           }
           cb(JSON.parse(filecontent));
       });
    }
}