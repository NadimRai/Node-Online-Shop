const products = [];

exports.getAddProduct = (req,res,next) =>{
    res.render('add-product',{
                pageTitle: 'Add Product Page', 
                path: '/admin/add-product'
    })
};

exports.postAddProduct = (req,res,next) =>{
    products.push({title: req.body.title});
    res.redirect('/');
}

exports.getProduct = (req,res,next) =>{
    res.render('shop', {
        prods: products, 
        pageTitle:'Shop Page', 
        path: '/'});
}