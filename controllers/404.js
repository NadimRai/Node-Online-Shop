exports.errorPage = (req,res,next) =>{
    res.status(404).render('404',{
        path: '/404',
        pageTitle: 'Page Not Really Found'
    });
}