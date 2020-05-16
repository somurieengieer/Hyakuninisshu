import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Question, QuestionItem} from "./Question";
import {nextSong, resetSong, selectPlayingNumber} from "../song/playingSongSlice";
import {useDispatch, useSelector} from "react-redux";
import {ModalPlayer} from "../player/ModalPlayer";
import {QuestionHeader} from "./QuestionHeader";
import {QuestionFooter} from "./QuestionFooter";


const useStyles = makeStyles({
});

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
      <Question question={playingQuestion} showAnswer={showAnswer} playEnded={playNext}/>
    </ModalPlayer>
  );
}
