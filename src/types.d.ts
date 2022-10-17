export type Weather = 'synny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';
export type Visibility = 'great' | 'good' | 'ok' | 'porr';

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

/* export type NonSensitiveInfoDiaryEntry = Pick<
  DiaryEntry,
  'id' | 'date' | 'weather' | 'visibility'
>; */

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>;
