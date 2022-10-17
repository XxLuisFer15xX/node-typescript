import { Router } from 'express'
import * as diaryControllers from '../controllers/diary'
import toNewDiaryEntry from '../utils'

const diaryRouter = Router()

diaryRouter.get('/', (_req, res) => {
  res.send(diaryControllers.getEntriesWitoutSensitiveInfo())
})

diaryRouter.get('/:idDiary', (req, res) => {
  const { idDiary } = req.params
  const diary = diaryControllers.findById(Number(idDiary))
  return diary != null ? res.send(diary) : res.sendStatus(404)
})

diaryRouter.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const diaryEntry = diaryControllers.addDiary(newDiaryEntry)
    return res.send(diaryEntry)
  } catch (error) {
    return res.status(400).send(error.message)
  }
})

export default diaryRouter
