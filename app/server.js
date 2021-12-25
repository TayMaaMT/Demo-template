require('dotenv').config();
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const i18next = require('i18next');
const i18nextMiddleware = require('i18next-express-middleware');
const Backend = require('i18next-node-fs-backend');
const { GeneralError } = require('./framework/response/error/errors');
const { handleError } = require('./framework/response/error');
const { handleSuccess } = require('./framework/response/success');
const { parseToNumber } = require('./framework/helpers');

const app = express();
app.use(cors());

app.use(i18nextMiddleware.handle(i18next));
i18next
  .use(i18nextMiddleware.LanguageDetector)
  .use(Backend)
  .init({
    fallbackLng: 'en',
    backend: {
      loadPath: `${__dirname}/locales/{{lng}}/{{ns}}.json`,
    },
    detection: {
      order: ['header'],
      caches: false,
    },
  });

app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');

app.use('/api', require('./routes/mainRouter'));
app.use('/', require('./routes/healthCheck'));

app.use('*', (req, res) => res.status(404).send(req.t('CommonError.pageNotFound')));

// eslint-disable-next-line no-unused-vars
app.use((service, req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  if (service instanceof GeneralError) {
    return handleError(service, req, res);
  }
  return handleSuccess(service, req, res);
});
app.listen(parseToNumber(process.env.PORT || 3000), () => console.log(`Server started on port ${process.env.PORT || 3000}`));

module.exports = app;
