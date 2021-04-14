import express from 'express';
import routes from './routes';
import connectDB from "./controllers/index";

const port = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(routes);
app.all('*', (_, res) => {
  res.redirect('https://github.com/MlkMahmud/todays-movies-api');
});


app.listen(port, async (err) => {
  try {
    if (err) throw err;
    await connectDB();
    console.log(`> Running on PORT: ${port}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
