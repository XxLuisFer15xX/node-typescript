import { Router } from 'express';
import * as diaryControllers from '../controllers/diary';

const diaryRouter = Router();

diaryRouter.get('/', (_req, res) => {
  res.send(diaryControllers.getEntriesWitoutSensitiveInfo());
});

diaryRouter.get('/:idDiary', (req, res) => {
  const { idDiary } = req.params;
  const diary = diaryControllers.findById(Number(idDiary));
  return diary != null ? res.send(diary) : res.sendStatus(404);
});

diaryRouter.post('/', (_req, res) => {
  res.send('Saving a diary!');
});

export default diaryRouter;
