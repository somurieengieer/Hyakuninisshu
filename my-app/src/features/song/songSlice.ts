import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

// @ts-ignore
export const allNumbers: number[] = [...Array(100).keys()].map(n => n+1);

interface CounterState {
  activeNumbers: number[]
}

const initialState: CounterState = {
  activeNumbers: allNumbers
};

export const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
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
  },
});

export const { add, replace, remove } = songSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectActiveNumbers = (state: RootState) => state.song.activeNumbers;

export default songSlice.reducer;
