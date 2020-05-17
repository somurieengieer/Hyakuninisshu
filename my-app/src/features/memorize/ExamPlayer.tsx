import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Question, QuestionItem} from "./question/Question";
import {nextSong, previousSong, resetSong, selectPlayingNumber} from "../song/playingSongSlice";
import {useDispatch, useSelector} from "react-redux";
import {ModalPlayer} from "../player/ModalPlayer";
import {QuestionFooter} from "./question/QuestionFooter";


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
      <Question question={playingQuestion} showAnswer={showAnswer} playEnded={playNext}/>
    </ModalPlayer>
  );
}
