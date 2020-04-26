import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Button, Card, CardActions, CardContent, Typography} from "@material-ui/core";

interface Archive {
  title: string,
  songs: number[]
}

const songArchives: Archive[] = [
  // @ts-ignore
  {title: '全て', songs: [...Array(99).keys()].map(n => n+1)},
  {title: '5色百人一首 青', songs: [3, 5, 6, 12, 14, ]},
  {title: '5色百人一首 ピンク', songs: [1, 4, 13, 16, ]},
  {title: '5色百人一首 黄', songs: [2, 7, 10, 18, ]},
  {title: '5色百人一首 緑', songs: [8, 9, 11, 15, 17, 20]},
  {title: '5色百人一首 オレンジ', songs: [19, ]},
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
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      {songArchives.map(({title, songs})=> (
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
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

