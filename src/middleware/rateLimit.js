import rateLimit from 'express-rate-limit'

export function limiterV2(max = 100, timeMinutes = 15) {
    return rateLimit({
        windowMs: timeMinutes * 60 * 1000, // minutes
        max: max, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
        standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
        legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    })
}
