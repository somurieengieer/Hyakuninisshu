import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import songReducer from '../features/song/songSlice'
import playingSongReducer from '../features/song/playingSongSlice'
import songArchiveReducer from '../features/songArchive/songArchiveSlice'
import playOptionReducer from '../features/player/playOptionSlice'
import {createLogger} from "redux-logger";

const logger = createLogger({
  diff: true,
  collapsed: true
});

export const store = configureStore({
  reducer: {
    song: songReducer,
    playingSong: playingSongReducer,
    songArchive: songArchiveReducer,
    playOption: playOptionReducer,
  },
  middleware: [
    logger
  ]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
