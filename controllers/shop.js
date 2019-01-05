const Product = require('../models/product');


exports.getIndex = (req,res,next) =>{
    Product.fetchAll(products =>{
        res.render('shop/index', {
            prods: products, 
            pageTitle:'Shop', 
            path: '/'
        });
    });
}

exports.getProducts = (req,res,next) =>{
    Product.fetchAll(products =>{
        res.render('shop/product-list', {
            prods: products, 
            pageTitle:'All Products List', 
            path: '/products'
        });
    });
}

exports.getCart = (req,res,next) =>{
    res.render('shop/cart', {
        pageTitle:'Cart', 
        path: '/cart'
    });
}

exports.getCheckout = (req,res,next) =>{
    res.render('shop/checkout',{
        path: '/checkout',
        pageTitle: 'Checkout'
    })
}

