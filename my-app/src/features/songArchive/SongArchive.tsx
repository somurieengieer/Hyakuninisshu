import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import {songArchiveGroups} from "../../slice/songArchive/songArchiveSlice";
import {SongArchiveGroup} from "./SongArchiveGroup";
import {theme} from "../../materialui/theme";

const useStyles = makeStyles({
  root: {
    minWidth: 150,
  },
  archiveGroups: {
    marginTop: theme.spacing(3)
  },
  archiveGroup: {
    marginTop: theme.spacing(2)
  }
});

export function SongArchive() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="subtitle1">
        使用する歌集を以下から選択してください
      </Typography>
      <div className={classes.archiveGroups}>
        {songArchiveGroups.map(({groupTitle, archives}) => (
          <div className={classes.archiveGroup} key={groupTitle}>
            <SongArchiveGroup groupTitle={groupTitle} archives={archives}/>
          </div>
        ))}
      </div>
    </>
  );
}

