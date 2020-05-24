import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Divider, List, ListItem, ListItemText, Typography} from "@material-ui/core";
import {theme} from "../../materialui/theme";
import {IntervalTimeSlider} from "../../features/player/option/IntervalTimeSlider";
import {ContinuousPlayBackCheckBox} from "../../features/player/option/ContinuousPlayBackCheckBox";
import {SongVisibleCheckBox} from "../../features/player/option/SongVisibleCheckBox";
import {PlayButton} from "../../features/player/PlayButton";
import {myUrl} from "../Urls";
import {selectActiveArchive} from "../../slice/songArchive/songArchiveSlice";
import {useSelector} from "react-redux";


const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

export function PlayersComponent() {

  const classes = useStyles();
  const activeArchiveTitle = useSelector(selectActiveArchive).title

  return (
    <Box display="flex" justifyContent="center" m={1} p={1}>
      <Box>
        <List className={classes.root}>
          <ListItem alignItems="center">
            <PlayButton url={myUrl.player}/>
            <ListItemText
              primary="歌の読み上げ"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    序歌を読んだ後、選択した歌をランダムに読み上げます。
                  </Typography>
                  <br/>
                  <ContinuousPlayBackCheckBox/>
                  <br/>
                  <IntervalTimeSlider/>
                  <br/>
                  <SongVisibleCheckBox/>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li"/>
          <ListItem alignItems="center">
            <PlayButton url={myUrl.examKamiShimoById(activeArchiveTitle)}/>
            <ListItemText
              primary="上の句決まり字の暗記テスト"
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  上の句の決まり字から歌を暗唱できるかをテストします
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li"/>
          <ListItem alignItems="center">
            <PlayButton url={myUrl.examShimoKamiById(activeArchiveTitle)}/>
            <ListItemText
              primary="下の句決まり字の暗記テスト"
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  下の句の決まり字から歌を暗唱できるかをテストします
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li"/>
          <ListItem alignItems="center">
            <PlayButton url={myUrl.examShimoKamiCardById(activeArchiveTitle)}/>
            <ListItemText
              primary="下の句カードの暗記テスト"
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  下の句のカードから上の句の決まり字を暗唱できるかをテストします
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

