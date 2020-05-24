import React from 'react';
import {Question, QuestionItem} from "./question/Question";
import {useDispatch, useSelector} from "react-redux";
import {PlayerFrame} from "../player/PlayerFrame";
import {QuestionFooter} from "./question/QuestionFooter";
import SwipeableViews from 'react-swipeable-views';
import {selectPlayingNumber, selectShowAnswer, setSong, showAnswer} from "../../slice/song/songSlice";


interface AudioPlayerProps {
  questions: QuestionItem[]
}

// 序歌も含めて流す連番を引数とする
export function ExamPlayer({questions,}: AudioPlayerProps) {

  const dispatch = useDispatch();

  const playingIndex = useSelector(selectPlayingNumber);
  const answerVisible = useSelector(selectShowAnswer);

  const onChangeIndex = (index: number, indexLatest: number) => {
    dispatch(setSong(index))
  };

  const showAnswerMethod = () => {
    dispatch(showAnswer())
  }

  return (
    <PlayerFrame headerText={`${playingIndex + 1} / ${questions.length}`}
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
          <div key={`questionDiv${index}`}>
            <Question question={question}
                      showAnswer={playingIndex === index && answerVisible}/>
          </div>
        ))}
      </SwipeableViews>
    </PlayerFrame>
  );
}
