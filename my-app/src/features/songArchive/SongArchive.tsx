import React, {useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Button, Card, CardContent, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {replace} from '../song/songSlice';
import {getSongArchive, selectActiveArchive, setArchive, songArchives} from "./songArchiveSlice";
import classNames from "classnames";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  active: {
    backgroundColor: '#F0D0A0',
  },
});

export function SongArchive() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const activeArchive = useSelector(selectActiveArchive);

  // const replaceNumbers = (numbers: number[]): void => {
  //   dispatch(replace(numbers));
  // };

  const changeArchive = (archiveTitle: string): void => {
    dispatch(setArchive(getSongArchive(archiveTitle)))
  };

  useEffect(() => {
    dispatch(replace(activeArchive.songs))
  }, [activeArchive]);

  return (
    <div>
      {songArchives.map(({title, songs})=> (
        <Button key={title} onClick={() => changeArchive(title)}>
          <Card className={
            classNames(
              classes.root,
              {[classes.active]: activeArchive.title == title}
            )
          }>
          <CardContent>
            {/*<Typography className={classes.title} color="textSecondary" gutterBottom>*/}
            {/*  Word of the Day*/}
            {/*</Typography>*/}
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            {/*<Typography className={classes.pos} color="textSecondary">*/}
            {/*  adjective*/}
            {/*</Typography>*/}
            {/*<Typography variant="body2" component="p">*/}
            {/*  well meaning and kindly.*/}
            {/*  <br />*/}
            {/*  {'"a benevolent smile"'}*/}
            {/*</Typography>*/}
          </CardContent>
          {/*<CardActions>*/}
          {/*  <Button size="small">Learn More</Button>*/}
          {/*</CardActions>*/}
        </Card>
        </Button>
      ))}
    </div>
  );
}

