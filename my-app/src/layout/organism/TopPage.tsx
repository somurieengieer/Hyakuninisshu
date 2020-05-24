import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {PlayersComponent} from "../molecule/PlayersComponent";
import {SongArchive} from "../../features/songArchive/SongArchive";
import {theme} from "../../materialui/theme";

const useStyles = makeStyles({
  margin: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
});

export function TopPage() {

  const classes = useStyles();

  return (
    <>
      <PlayersComponent/>

      <div className={classes.margin}>
        <SongArchive/>
      </div>

      {/*曲のカスタマイズ機能はお蔵入り*/}
      {/*<Songs/>*/}
    </>
  );
}

