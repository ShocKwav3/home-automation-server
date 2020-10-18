const forceHttps = (req, res, next) => {
    if (req.protocol !== 'https') {
        console.log("ZOO        ", 'https://' + req.get('Host') + req.url)
        res.redirect('https://' + req.get('Host') + req.url);
    } else {
        next();
    }
}


export default {
    forceHttps,
};
