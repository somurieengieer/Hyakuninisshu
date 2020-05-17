import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Question, QuestionItem} from "./question/Question";
import {nextSong, previousSong, resetSong, selectPlayingNumber} from "../song/playingSongSlice";
import {useDispatch, useSelector} from "react-redux";
import {ModalPlayer} from "../player/ModalPlayer";
import {QuestionFooter} from "./question/QuestionFooter";
import SwipeableViews from 'react-swipeable-views';
import {virtualize} from 'react-swipeable-views-utils';


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

  const playingQuestion = questions[playingIndex];

  const VirtualizeSwipeableViews = virtualize(SwipeableViews);

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
    dispatch(nextSong())
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
