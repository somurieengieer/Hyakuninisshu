import React, {useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Button, Card, CardContent, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {replace} from '../../slice/song/songSlice';
import {getSongArchive, selectActiveArchive, setArchive, songArchives} from "../../slice/songArchive/songArchiveSlice";
import classNames from "classnames";

const useStyles = makeStyles({
  root: {
    minWidth: 150,
  },
  active: {
    backgroundColor: '#F0D0A0',
  },
});

export function SongArchive() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const activeArchive = useSelector(selectActiveArchive);

  const changeArchive = (archiveTitle: string): void => {
    dispatch(setArchive(getSongArchive(archiveTitle)))
  };

  useEffect(() => {
    dispatch(replace(activeArchive.songs))
  }, [activeArchive]);

  return (
    <>
      <Typography variant="subtitle1">
        曲集を以下から選択してください
      </Typography>
      <div>
        {songArchives.map(({title}) => (
          <Button key={title} onClick={() => changeArchive(title)}>
            <Card className={
              classNames(
                classes.root,
                {[classes.active]: activeArchive.title == title}
              )
            }>
              <CardContent>
                <Typography variant="caption">
                  {title}
                </Typography>
              </CardContent>
            </Card>
          </Button>
        ))}
      </div>
    </>
  );
}

