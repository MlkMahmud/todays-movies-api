import { Router } from 'express';
import { getMovies, getNowShowingMovies, getComingSoonMovies } from '../controllers';

const router = Router();

router.get('/api/v1/movies', async (req, res) => {
  const movies = await getMovies();
  res.json(movies);
});

router.get('/api/v1/movies/nowshowing', async (req, res) => {
  const movies = await getNowShowingMovies();
  res.json(movies);
});

router.get('/api/v1/movies/comingsoon', async (req, res) => {
  const movies = await getComingSoonMovies();
  res.json(movies);
});


export default router;
