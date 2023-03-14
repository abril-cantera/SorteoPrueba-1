import express from 'express'
import cors from 'cors';

const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');

const app = express()
const port = process.env.PORT || 3000;
app.use(express.json());

const whitelist = ['http://18.116.45.121:3000', 'http://18.116.45.121:3000/winners']

const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));
routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

// app.get('/nuevo', (req, res) => {
//   res.end('Hellow Word')
// })

app.listen(3000)
console.log('====================================');
console.log('Server on port 3000');
console.log('====================================');
