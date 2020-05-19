import React from 'react';
import {Question, QuestionItem} from "./question/Question";
import {useDispatch, useSelector} from "react-redux";
import {ModalPlayer} from "../player/ModalPlayer";
import {QuestionFooter} from "./question/QuestionFooter";
import SwipeableViews from 'react-swipeable-views';
import {resetSong, selectPlayingNumber, selectShowAnswer, setSong, showAnswer} from "../../slice/song/songSlice";


interface AudioPlayerProps {
  questions: QuestionItem[]
  callbackStop: () => void
}

// 序歌も含めて流す連番を引数とする
export function ExamPlayer({questions, callbackStop}: AudioPlayerProps) {

  const dispatch = useDispatch();

  const playingIndex = useSelector(selectPlayingNumber);
  const answerVisible = useSelector(selectShowAnswer);

  const stop = () => {
    dispatch(resetSong());
    callbackStop()
  };

  const onChangeIndex = (index: number, indexLatest: number) => {
    dispatch(setSong(index))
  };

  const showAnswerMethod = () => {
    dispatch(showAnswer())
  }

  return (
    <ModalPlayer callbackStop={stop}
                 footerJSX={(<QuestionFooter/>)}
    >
      <SwipeableViews
        onChangeIndex={onChangeIndex}
        index={playingIndex}
        enableMouseEvents
        resistance
        style={{height: '100%'}}
        onClick={showAnswerMethod}
      >
        {questions.map((question, index) => (
          <div>
            <Question question={question} showAnswer={playingIndex == index && answerVisible}/>
          </div>
        ))}
      </SwipeableViews>
    </ModalPlayer>
  );
}
