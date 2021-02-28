import { printLog } from 'src/helpers/logHelpers';


const forceHttps = (req, res, next) => {
    if (req.protocol !== 'https') {
        printLog(`Redirecting to https://${req.get('Host')}${req.url}`);

        res.redirect(`https://${req.get('Host')}${req.url}`);
    } else {
        next();
    }
};


export default {
    forceHttps,
};
