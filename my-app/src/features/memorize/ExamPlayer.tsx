import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Question, QuestionItem} from "./question/Question";
import {nextSong, previousSong, resetSong, selectPlayingNumber, setSong} from "../song/playingSongSlice";
import {useDispatch, useSelector} from "react-redux";
import {ModalPlayer} from "../player/ModalPlayer";
import {QuestionFooter} from "./question/QuestionFooter";
import SwipeableViews from 'react-swipeable-views';


const useStyles = makeStyles({});

interface AudioPlayerProps {
  questions: QuestionItem[]
  callbackStop: () => void
}

// 序歌も含めて流す連番を引数とする
export function ExamPlayer({questions, callbackStop}: AudioPlayerProps) {

  const classes = useStyles();
  const dispatch = useDispatch();

  const playingIndex = useSelector(selectPlayingNumber);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  useEffect(() => {
    setShowAnswer(false)
  }, [playingIndex]);

  const playNext = () => {
    dispatch(nextSong())
  };

  const playPrevious = () => {
    dispatch(previousSong())
  };

  const stop = () => {
    dispatch(resetSong());
    callbackStop()
  };

  const onChangeIndex = (index: number, indexLatest: number) => {
    setShowAnswer(false);
    dispatch(setSong(index))
  };

  return (
    <ModalPlayer callbackStop={stop}
                 headerText={`${playingIndex + 1} / ${questions.length}`}
                 footerJSX={(
                   <QuestionFooter showAnswer={showAnswer}
                                   setShowAnswer={setShowAnswer}
                                   playPrevious={playPrevious}
                                   playNext={playNext}
                   />
                 )}
    >
      <SwipeableViews
        onChangeIndex={onChangeIndex}
        index={playingIndex}
        enableMouseEvents
        resistance
      >
        {questions.map((question, index) => (
          <div>
            <Question question={question} showAnswer={playingIndex == index && showAnswer}/>
          </div>
        ))}
      </SwipeableViews>
    </ModalPlayer>
  );
}
