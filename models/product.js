const fs = require('fs');
const path = require('path');
const productDir = require('../util/path');
const p = path.join(productDir, 'data','products.json');

const getProductsFromFile = (cb)=>{
       fs.readFile(p,(err, filecontent) =>{
           if(err){
               return cb([]);
           }
           cb(JSON.parse(filecontent));
    });
}

module.exports = class Product{
    constructor(title){
        this.title = title;
    }

    save(){
        // products.push(this);
        getProductsFromFile(products =>{
            products.push(this);
            fs.writeFile(p, JSON.stringify(products),(err) =>{
                console.log(err);
            })
        });
     }

    static fetchAll(cb){
        getProductsFromFile(cb)
    }
}