import { Router } from 'express';

const diaryRouter = Router();

diaryRouter.get('/', (_req, res) => {
  res.send('Fetching all entry diaries');
});

diaryRouter.post('/', (_req, res) => {
  res.send('Saving a diary!');
});

export default diaryRouter;
