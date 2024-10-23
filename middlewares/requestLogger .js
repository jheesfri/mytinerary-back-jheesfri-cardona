const requestLogger = (req, res, next) => {
    console.log(`method ${req.method} with path ${req.url}`);
    next();
};

export default requestLogger
