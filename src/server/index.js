import express from 'express';
import { urlencoded, json } from 'body-parser';
import { resolve } from  'path';
const app = express();
const Port = process.env.PORT || 3000;

app.use(express.static(resolve(__dirname, 'src/public')));
app.use(urlencoded({ extended: false }));
app.use(json());

app.get('/*', (req, res) => res.sendFile(resolve(__dirname, '../public/index.html')));
app.listen(Port, () => console.log(`Server started at http://localhost:${Port}`));