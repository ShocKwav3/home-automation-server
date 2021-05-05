import responseHelpers from 'src/helpers/responseHelpers';
import { rateLimiterLog, logStylers } from 'src/helpers/logHelpers';


const rateLimiter = (req, res, next) => {
    const rateLimiterInstance = req.app.get('rateLimiter');

    rateLimiterInstance.consume(req.ip)
        .then(() => {
            next();
        }).catch(((rejRes) => {
            if (rejRes instanceof Error) {
                rateLimiterLog(logStylers.genericError('Error in rate-limiter middleware: '), logStylers.values(rejRes.message));

                res.status(500).send(responseHelpers.rateLimiterFailure('Internal server error occurred. Please try again later!'));
            } else {
                rateLimiterLog(logStylers.genericFailure('Rate limiting IP: '), logStylers.values(req.ip));

                const seconds = Math.round(rejRes.msBeforeNext / 1000) || 1;

                res.set('Retry-After', String(seconds));
                res.status(429).send(responseHelpers.rateLimiterFailure(`You are being rate limited, please try again after ${seconds} seconds`));
            }
        }));
};


export default {
    rateLimiter,
};
