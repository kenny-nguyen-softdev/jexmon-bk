import RateLimit from "express-rate-limit";

const env = process.env.NODE_ENV || "dev";
const rateLimitRequest = Number(process.env.RATE_LIMIT_TIME) || 15;
const rateLimitTime = Number(process.env.RATE_LIMIT_REQUEST) || 100;

export default () => {
  if (env === "production") {
    return RateLimit({
      windowMs: rateLimitTime * 60 * 1000, // 1 hour
      max: rateLimitRequest, // limit each IP to 30 requests per windowMs
      message: "Rate limt exceeded, please try again later some time.",
      standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
      legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    });
  }
  return RateLimit({
    windowMs: 5 * 60 * 1000, // 1 hour
    max: 3000, // limit each IP to 3000 requests per windowMs
    message: "Rate limt exceeded, please try again later some time.",
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  });
};
