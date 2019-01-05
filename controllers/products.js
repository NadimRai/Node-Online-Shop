exports.getAddProduct = (req,res,next) =>{
    res.render('add-product',{
                pageTitle: 'Add Product Page', 
                path: '/admin/add-product'
    })
};