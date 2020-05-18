import React, {useEffect, useState} from 'react';
import {Question, QuestionItem} from "./question/Question";
import {useDispatch, useSelector} from "react-redux";
import {ModalPlayer} from "../player/ModalPlayer";
import {QuestionFooter} from "./question/QuestionFooter";
import SwipeableViews from 'react-swipeable-views';
import {resetSong, selectPlayingNumber, setSong} from "../../slice/song/songSlice";


interface AudioPlayerProps {
  questions: QuestionItem[]
  callbackStop: () => void
}

// 序歌も含めて流す連番を引数とする
export function ExamPlayer({questions, callbackStop}: AudioPlayerProps) {

  const dispatch = useDispatch();

  const playingIndex = useSelector(selectPlayingNumber);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  useEffect(() => {
    setShowAnswer(false)
  }, [playingIndex]);

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
                 footerJSX={(
                   <QuestionFooter showAnswer={showAnswer}
                                   setShowAnswer={setShowAnswer}
                   />
                 )}
    >
      <SwipeableViews
        onChangeIndex={onChangeIndex}
        index={playingIndex}
        enableMouseEvents
        resistance
        style={{height: '100%'}}
        onClick={() => setShowAnswer(!showAnswer)}
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
