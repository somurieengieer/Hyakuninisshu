import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

interface State {
  playingNumber: number
}

const initialState: State = {
  playingNumber: 0
};

export const playingSongSlice = createSlice({
  name: 'playingSong',
  initialState,
  reducers: {
    resetSong: (state, action: PayloadAction) => {
      state.playingNumber = 0
    },
    nextSong: (state, action: PayloadAction) => {
      console.log('called nextSong?');
      state.playingNumber += 1
    },
    previousSong: (state, action: PayloadAction) => {
      state.playingNumber -= 1
    },
  },
});

export const {resetSong, nextSong, previousSong} = playingSongSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPlayingNumber = (state: RootState) => state.playingSong.playingNumber;

export default playingSongSlice.reducer;
