import React from 'react';
import './App.css';
import {TopMenu} from "./layout/molecule/TopMenu";
import {GoogleAdsSmall} from "./ads/GoogleAdsSmall";
import {Route, Switch} from "react-router";
import {myUrl} from "./layout/Urls";
import {PlayPage} from "./layout/organism/PlayPage";
import {TopPage} from "./layout/organism/TopPage";
import {ExamKamiShimoPage} from "./layout/organism/ExamKamiShimoPage";
import {ExamShimoKamiPage} from "./layout/organism/ExamShimoKamiPage";
import {ExamShimoKamiCardPage} from "./layout/organism/ExamShimoKamiCardPage";


function App() {
  return (
    <>
      <TopMenu/>
      <GoogleAdsSmall/>

      <Switch>
        <Route exact path={myUrl.topPage}>
          <TopPage/>
        </Route>
        <Route path={myUrl.player}>
          <PlayPage/>
        </Route>
        <Route path={myUrl.examKamiShimoById(':archiveTitle')}>
          <ExamKamiShimoPage/>
        </Route>
        <Route path={myUrl.examShimoKamiById(':archiveTitle')}>
          <ExamShimoKamiPage/>
        </Route>
        <Route path={myUrl.examShimoKamiCardById(':archiveTitle')}>
          <ExamShimoKamiCardPage/>
        </Route>
      </Switch>

      <GoogleAdsSmall/>
    </>
  );
}

export default App;
