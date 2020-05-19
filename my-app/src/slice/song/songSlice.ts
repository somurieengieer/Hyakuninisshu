import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {shuffle} from "../../utils/Utils";

// @ts-ignore
export const allNumbers: number[] = [...Array(100).keys()].map(n => n + 1);

interface State {
  activeNumbers: number[]
  playingNumber: number
  answerVisible: boolean
}

const initialState: State = {
  activeNumbers: allNumbers,
  playingNumber: 0,
  answerVisible: false,
};

export const playingSongSlice = createSlice({
  name: 'playingSong',
  initialState,
  reducers: {

    // activeNumbersの変更イベント
    add: (state, action: PayloadAction<number>) => {
      state.activeNumbers.concat(action.payload);
    },
    replace: (state, action: PayloadAction<number[]>) => {
      state.activeNumbers = action.payload;
    },
    remove: (state, action: PayloadAction<number>) => {
      const idx = state.activeNumbers.indexOf(action.payload);
      state.activeNumbers.splice(idx, 1);
    },

    // playingNumberの変更イベント
    resetSong: (state, action: PayloadAction) => {
      state.playingNumber = 0
      state.answerVisible = false
    },
    nextSong: (state, action: PayloadAction) => {
      state.playingNumber += 1
      state.answerVisible = false
    },
    previousSong: (state, action: PayloadAction) => {
      state.playingNumber -= 1
      state.answerVisible = false
    },
    setSong: (state, action: PayloadAction<number>) => {
      state.playingNumber = action.payload
      state.answerVisible = false
    },
    resetShuffle: (state, action: PayloadAction) => {
      state.playingNumber = 0
      state.activeNumbers = shuffle(state.activeNumbers)
      state.answerVisible = false
    },

    // showAnswerの変更イベント
    showAnswer: (state, action: PayloadAction) => {
      state.answerVisible = true
    },
  },
});

export const {
  add, replace, remove,
  resetSong, nextSong, previousSong, setSong, resetShuffle,
  showAnswer,
} = playingSongSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectActiveNumbers = (state: RootState) => state.song.activeNumbers;
export const selectPlayingNumber = (state: RootState) => state.song.playingNumber;
export const selectShowAnswer = (state: RootState) => state.song.answerVisible;

export default playingSongSlice.reducer;
