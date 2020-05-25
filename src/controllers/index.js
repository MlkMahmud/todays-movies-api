import { MongoClient } from 'mongodb';

const uri = process.env.DB_URL;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(uri, options);
const dbName = process.env.DB_NAME;

const init = async () => {
  await client.connect();
};

export const getMovies = async () => {
  const collection = client.db(dbName).collection('movies');
  // Filter Filmhouse's Web Test movie object
  const movies = await collection.find({ title: { $ne: 'Web Test' } }).toArray();
  return movies;
};

export const getNowShowingMovies = async () => {
  const collection = client.db(dbName).collection('movies');
  const movies = await collection
    .find({ now_showing: true, 'showtimes.0': { $exists: true } })
    .toArray();
  return movies;
};

export const getComingSoonMovies = async () => {
  const collection = client.db(dbName).collection('movies');
  const movies = await collection.find({ now_showing: false }).toArray();
  return movies;
};

init();
