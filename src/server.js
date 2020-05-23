import express from 'express';
import routes from './routes';

const port = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(routes);


app.listen(port);
