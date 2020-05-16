import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

interface State {
  intervalSecond: number
}

const initialState: State = {
  intervalSecond: 0
};

export const playOptionSlice = createSlice({
  name: 'playOption',
  initialState,
  reducers: {
    setIntervalSecond: (state, action: PayloadAction<number>) => {
      const newValue = action.payload;
      if (newValue < 0) {
        state.intervalSecond = 0
      } else if (newValue > 10) {
        state.intervalSecond = 10
      } else {
        state.intervalSecond = action.payload
      }
    },
  },
});

export const {setIntervalSecond} = playOptionSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectIntervalSecond = (state: RootState) => state.playOption.intervalSecond;

export default playOptionSlice.reducer;
