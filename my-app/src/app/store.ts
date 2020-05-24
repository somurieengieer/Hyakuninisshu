import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import songReducer from '../slice/song/songSlice'
import songArchiveReducer from '../slice/songArchive/songArchiveSlice'
import playOptionReducer from '../slice/player/option/playOptionSlice'
import {createLogger} from "redux-logger";
import {createBrowserHistory} from "history";
import {connectRouter, routerMiddleware} from "connected-react-router";

const logger = createLogger({
  diff: true,
  collapsed: true
});

export const history = createBrowserHistory();

export const store = configureStore({
  reducer: {
    song: songReducer,
    songArchive: songArchiveReducer,
    playOption: playOptionReducer,
    // @ts-ignore  （toolkit上Reducer<State, AnyAction>のような汎用的な型にしないといけないみたいだけど無視
    router: connectRouter(history),
  },
  middleware: [
    logger,

// @ts-ignore （toolkit上undefined型にしないといけないみたいだけど無視
    routerMiddleware(history),
  ]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
