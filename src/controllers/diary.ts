import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (
  id: number,
): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(diary => diary.id === id)
  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

export const getEntriesWitoutSensitiveInfo =
  (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
      return {
        id,
        date,
        weather,
        visibility,
      }
    })
  }

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const { date, weather, visibility, comment } = newDiaryEntry
  const diaryEntry = {
    id: Math.max(...diaries.map(diary => diary.id)) + 1,
    date,
    weather,
    visibility,
    comment,
  }
  diaries.push(diaryEntry)
  return diaryEntry
}
