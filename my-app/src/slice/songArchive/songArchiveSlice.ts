import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

export interface SongArchive {
  title: string,
  songs: number[]
}

function range(from: number, to: number): number[] {
  // @ts-ignore
  return [...Array(to - from + 1).keys()].map(n => n + from)
}

function rangeArchive(from: number, to: number): object {
  return {title: `${from}〜${to}番`, songs: range(from, to)}
}

export const songArchivesAll: SongArchive[] = [
  {title: '全て', songs: range(1, 100)},
]
export const songArchives5colors: SongArchive[] = [
  // テスト用
  // {title: '5色百人一首 青', songs: [3, 5, 6, 12, 14, ]},
  // {title: '5色百人一首 ピンク', songs: [1, 4, 13, 16, ]},
  // {title: '5色百人一首 黄', songs: [2, 7, 10, 18, ]},
  // {title: '5色百人一首 緑', songs: [8, 9, 11, 15, 17, 20]},
  // {title: '5色百人一首 オレンジ', songs: [19, ]},
  // 本番用
  {title: '青', songs: [3, 5, 6, 12, 14, 24, 30, 31, 50, 57, 61, 62, 69, 70, 74, 75, 76, 82, 91, 100]},
  {title: '桃', songs: [1, 4, 13, 16, 22, 28, 34, 40, 48, 51, 58, 65, 66, 72, 73, 80, 83, 84, 86, 97,]},
  {title: '黄', songs: [2, 7, 10, 18, 32, 33, 37, 39, 46, 47, 55, 60, 78, 79, 81, 85, 87, 89, 94, 96,]},
  {title: '緑', songs: [8, 9, 11, 15, 17, 20, 23, 26, 29, 35, 36, 38, 41, 42, 54, 59, 68, 71, 92, 93,]},
  {title: '橙', songs: [19, 21, 25, 27, 43, 44, 45, 49, 52, 53, 56, 63, 64, 67, 77, 88, 90, 95, 98, 99,]},
]
export const songArchives20cards: SongArchive[] =
  // @ts-ignore
  ([...Array(5).keys()]
    .map(i => i * 20 + 1)
    .map(i => rangeArchive(i, i + 19)) as SongArchive[])
export const songArchives10cards: SongArchive[] =
  // @ts-ignore
  ([...Array(10).keys()]
    .map(i => i * 10 + 1)
    .map(i => rangeArchive(i, i + 9)) as SongArchive[])

interface songArchiveGroup {
  groupTitle: string
  archives: SongArchive[]
}

export const songArchiveGroups: songArchiveGroup[] = [
  {groupTitle: '百人一首 全首', archives: songArchivesAll},
  {groupTitle: '五色百人一首 色別', archives: songArchives5colors},
  {groupTitle: '百人一首 20首毎', archives: songArchives20cards},
  {groupTitle: '百人一首 10首毎', archives: songArchives10cards},
]

// @ts-ignore
export const songArchives: SongArchive[] =
  songArchivesAll
    .concat(songArchives5colors)
    .concat(songArchives20cards)
    .concat(songArchives10cards)

export function getSongArchive(title: string): SongArchive {
  return (songArchives.find(s => s.title === title) as SongArchive)
}

interface State {
  activeArchive: SongArchive
}

const initialState: State = {
  activeArchive: songArchives[0]
};

export const songArchiveSlice = createSlice({
  name: 'songArchive',
  initialState,
  reducers: {
    setArchiveByTitle: (state, action: PayloadAction<string>) => {
      state.activeArchive = getSongArchive(action.payload)
    },
  },
});

export const {setArchiveByTitle} = songArchiveSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectActiveArchive = (state: RootState) => state.songArchive.activeArchive;

export default songArchiveSlice.reducer;
