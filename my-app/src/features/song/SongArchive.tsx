import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Button, Card, CardContent, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {replace} from './songSlice';

interface Archive {
  title: string,
  songs: number[]
}

const songArchives: Archive[] = [
  // @ts-ignore
  {title: '全て', songs: [...Array(100).keys()].map(n => n+1)},
  {title: '5色百人一首 青', songs: [3, 5, 6, 12, 14, ]},
  {title: '5色百人一首 ピンク', songs: [1, 4, 13, 16, ]},
  {title: '5色百人一首 黄', songs: [2, 7, 10, 18, ]},
  {title: '5色百人一首 緑', songs: [8, 9, 11, 15, 17, 20]},
  {title: '5色百人一首 オレンジ', songs: [19, ]},
  // @ts-ignore
  {title: '1〜20', songs: [...Array(20).keys()].map(n => n+1)},
  // @ts-ignore
  {title: '21〜40', songs: [...Array(20).keys()].map(n => n+21)},
  // @ts-ignore
  {title: '41〜80', songs: [...Array(20).keys()].map(n => n+41)},
  // @ts-ignore
  {title: '61〜80', songs: [...Array(20).keys()].map(n => n+61)},
  // @ts-ignore
  {title: '81〜100', songs: [...Array(20).keys()].map(n => n+81)},
  {title: 'クリア', songs: []},
];

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export function SongArchive() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const bull = <span className={classes.bullet}>•</span>;

  const replaceNumbers = (numbers: number[]): void => {
    dispatch(replace(numbers));
  };

  return (
    <div>
      {songArchives.map(({title, songs})=> (
        <Button key={title} onClick={() => replaceNumbers(songs)}>
          <Card className={classes.root}>
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

