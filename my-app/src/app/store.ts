import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import songReducer from '../slice/song/songSlice'
import songArchiveReducer from '../slice/songArchive/songArchiveSlice'
import playOptionReducer from '../slice/player/option/playOptionSlice'
import {createLogger} from "redux-logger";

const logger = createLogger({
  diff: true,
  collapsed: true
});

export const store = configureStore({
  reducer: {
    song: songReducer,
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
