const corsOptions = {
  origin: process.env.CLIENT_URL
    ? [process.env.CLIENT_URL, process.env.CLIENT_URL_BUILD]
    : [process.env.CLIENT_URL_BUILD],
  optionsSuccessStatus: 200,
}; //

module.exports = { corsOptions };
