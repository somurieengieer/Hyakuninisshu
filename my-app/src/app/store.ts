import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import songReducer from '../features/song/songSlice'
import songArchiveReducer from '../features/song/songArchiveSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    song: songReducer,
    songArchive: songArchiveReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
