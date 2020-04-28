import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

export interface SongArchive {
  title: string,
  songs: number[]
}

export const songArchives: SongArchive[] = [
  // @ts-ignore
  {title: '全て', songs: [...Array(100).keys()].map(n => n+1)},
  {title: '5色百人一首 青', songs: [3, 5, 6, 12, 14, ]},
  {title: '5色百人一首 ピンク', songs: [1, 4, 13, 16, ]},
  {title: '5色百人一首 黄', songs: [2, 7, 10, 18, ]},
  {title: '5色百人一首 緑', songs: [8, 9, 11, 15, 17, 20]},
  {title: '5色百人一首 オレンジ', songs: [19, ]},
  // @ts-ignore
  {title: '1〜20', songs: [...Array(20).keys()].map(n => n+1)},
  // @ts-ignore
  {title: '21〜40', songs: [...Array(20).keys()].map(n => n+21)},
  // @ts-ignore
  {title: '41〜80', songs: [...Array(20).keys()].map(n => n+41)},
  // @ts-ignore
  {title: '61〜80', songs: [...Array(20).keys()].map(n => n+61)},
  // @ts-ignore
  {title: '81〜100', songs: [...Array(20).keys()].map(n => n+81)},
  {title: 'クリア', songs: []},
];

export function getSongArchive(title: string): SongArchive {
  return (songArchives.find(s => s.title == title) as SongArchive)
}

interface CounterState {
  activeArchive: SongArchive
}

const initialState: CounterState = {
  activeArchive: songArchives[0]
};

export const songArchiveSlice = createSlice({
  name: 'songArchive',
  initialState,
  reducers: {
    setArchive: (state, action: PayloadAction<SongArchive>) => {
      state.activeArchive = action.payload
    },
  },
});

export const { setArchive } = songArchiveSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectActiveArchive = (state: RootState) => state.songArchive.activeArchive;

export default songArchiveSlice.reducer;
