import { Visibility, Weather } from './enum'
import { NewDiaryEntry } from './types'

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isWeather = (weather: any): boolean => {
  return Object.values(Weather).includes(weather)
}

const isVisibility = (visibility: any): boolean => {
  return Object.values(Visibility).includes(visibility)
}

const parseComment = (commentForReq: any): string => {
  if (!isString(commentForReq)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentForReq
}

const parseDate = (dateForReq: any): string => {
  if (!isDate(dateForReq)) {
    throw new Error('Incorrect or missing date')
  }
  return dateForReq
}

const parseWeather = (weatherForReq: any): Weather => {
  if (!isString(weatherForReq) || !isWeather(weatherForReq)) {
    throw new Error('Incorrect or missing weather')
  }
  return weatherForReq
}

const parseVisibily = (visibilityForReq: any): Visibility => {
  if (!isString(visibilityForReq) || !isVisibility(visibilityForReq)) {
    throw new Error('Incorrect or missing visibility')
  }
  return visibilityForReq
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newDiaryEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibily(object.visibility),
  }
  return newDiaryEntry
}

export default toNewDiaryEntry
