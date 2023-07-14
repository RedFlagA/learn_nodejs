import express from 'express'
import morgan from 'morgan'
import { engine } from 'express-handlebars';
import path from 'path';
import {fileURLToPath} from 'url';
import route from './routes/index.js';
import dbConnect from './config/db/index.js';
import pkg from 'method-override';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(pkg('_method'))

//connect to db
dbConnect()

// app.use(morgan('combined'))

app.engine('hbs', engine({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources' ,'views'));
//router init
route(app)

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})
