import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import {theme} from "../../materialui/theme";
import {Question, QuestionItem} from "./Question";
import {nextSong, resetSong, selectPlayingNumber} from "../song/playingSongSlice";
import {useDispatch, useSelector} from "react-redux";
import {ModalPlayer} from "../player/ModalPlayer";
import {QuestionHeader} from "./QuestionHeader";
import {QuestionFooter} from "./QuestionFooter";


const useStyles = makeStyles({
  paper: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/image/washi.jpg)`,
  },
  paperTop: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/image/wagara_top.png)`,
    backgroundRepeat: 'no-repeat',
  },
  paperBottom: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/image/wagara_bottom.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right 0px',
  },
  iconBig: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '6em'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '10em'
    }
  },
  iconSmall: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '3em'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '6em'
    }
  },
  songArea: {
    [theme.breakpoints.down('xs')]: {
      width: 400
    },
    [theme.breakpoints.up('sm')]: {
      width: 560,
    }
  },
});

interface AudioPlayerProps {
  questions: QuestionItem[]
  callbackStop: () => void
}

export enum PlayStatuses {
  PLAYING = 'PLAYING',
  STOPPED = 'STOPPED',
  PAUSED = 'PAUSED'
}

// 序歌も含めて流す連番を引数とする
export function ExamPlayer({questions, callbackStop}: AudioPlayerProps) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const playingIndex = useSelector(selectPlayingNumber);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const playingQuestion = questions[playingIndex];

  useEffect(() => {
    setShowAnswer(false)
  }, [playingIndex]);

  const playNext = () => {
    if (playingIndex < questions.length - 1) {
      dispatch(nextSong())
    } else {
      dispatch(resetSong())
    }
  };

  const stop = () => {
    callbackStop()
  };

  return (
    <>
      <ModalPlayer callbackStop={stop}
                   headerJSX={(
                     <QuestionHeader>
                       {playingIndex + 1} / {questions.length}
                     </QuestionHeader>
                   )}
                   footerJSX={(
                     <QuestionFooter showAnswer={showAnswer}
                                     setShowAnswer={setShowAnswer}
                                     playNext={playNext}
                     />
                   )}
      >

        <Box display="flex" justifyContent="center"
             className={classes.paperBottom}
        >
          <Box className={classes.songArea}>
            <Question question={playingQuestion} showAnswer={showAnswer} playEnded={playNext}/>
          </Box>
        </Box>
      </ModalPlayer>
    </>
  );
}
