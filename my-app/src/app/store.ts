import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import songReducer from '../features/song/songSlice'
import songArchiveReducer from '../features/songArchive/songArchiveSlice'
import {createLogger} from "redux-logger";

const logger = createLogger({
  diff: true,
  collapsed: true
});

export const store = configureStore({
  reducer: {
    song: songReducer,
    songArchive: songArchiveReducer,
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
