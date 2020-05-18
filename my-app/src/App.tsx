import React from 'react';
import './App.css';
import {SongArchive} from "./features/songArchive/SongArchive";
import {makeStyles} from "@material-ui/core/styles";
import {theme} from "./materialui/theme";
import {TopMenu} from "./layout/TopMenu";
import {PlayersComponent} from "./layout/PlayersComponent";

const useStyles = makeStyles({
  margin: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div>
        <TopMenu/>

        {/*Google adsense advertisement */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <ins className="adsbygoogle"
             style={{display: 'block', textAlign: 'center'}}
             data-ad-layout="in-article"
             data-ad-format="fluid"
             data-ad-client="ca-pub-7646050836920456"
             data-ad-slot="9249145427"></ins>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>

        <PlayersComponent/>

        <div className={classes.margin}>
          <SongArchive/>
        </div>

        {/*曲のカスタマイズ機能はお蔵入り*/}
        {/*<Songs/>*/}
      </div>
    </div>
  );
}

export default App;
