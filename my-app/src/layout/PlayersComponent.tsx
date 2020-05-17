import React from 'react';
import {AudioPlayerComponent} from "../features/audio/AudioPlayerComponent";
import {ExamKamiShimoComponent} from "../features/memorize/ExamKamiShimoComponent";
import {ExamShimoKamiComponent} from "../features/memorize/ExamShimoKamiComponent";
import {makeStyles} from "@material-ui/core/styles";
import {Box, Divider, List, ListItem, ListItemText, Typography} from "@material-ui/core";
import {theme} from "../materialui/theme";
import {IntervalTimeSlider} from "../features/player/IntervalTimeSlider";
import {ContinuousPlayBackCheckBox} from "../features/player/ContinuousPlayBackCheckBox";


const useStyles = makeStyles({
  playMenuContainer: {
    width: '600px',
  },
  playMenuHeader: {},
  playMenuItem: {
    marginLeft: theme.spacing(2),
  },

  root: {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

const FlexCenter: React.FC = ({children}) => {

  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center" m={1} p={1}>
      <Box display="flex" justifyContent="flex-start"
           className={classes.playMenuContainer}>
        {children}
      </Box>
    </Box>
  )
};

export function PlayersComponent() {

  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center" m={1} p={1}>
      <List className={classes.root}>
        <ListItem alignItems="center">
          <AudioPlayerComponent/>
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
                <ContinuousPlayBackCheckBox/>
                <IntervalTimeSlider/>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li"/>
        <ListItem alignItems="center">
          <ExamKamiShimoComponent/>
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
          <ExamShimoKamiComponent/>
          <ListItemText
            primary="下の句決まり字の暗記テスト"
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
      </List>
    </Box>

    // <FlexCenter>
    //   <Typography>読み上げ</Typography>
    //   <AudioPlayerComponent/>
    // </FlexCenter>
    // <FlexCenter>
    //   <Box m={1} p={1}><ExamKamiShimoComponent/></Box>
    // </FlexCenter>
    // <FlexCenter>
    //   <Box m={1} p={1}><ExamShimoKamiComponent/></Box>
    // </FlexCenter>
  );
}

