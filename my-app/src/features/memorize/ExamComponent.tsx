import React, {useState} from 'react';
import {ExamPlayer} from "./ExamPlayer";
import {PlayButton} from "../player/PlayButton";
import {QuestionItem} from "./question/Question";
import {shuffle} from "../../utils/Utils";


interface ExamComponentProps {
  questions: QuestionItem[]
}

export function ExamComponent({questions}: ExamComponentProps) {

  const [playing, setPlaying] = useState<boolean>(false);
  let randomizedQuestions = shuffle(questions)

  const stoppedPlay = () => {
    setPlaying(false)
  };

  return (
    <>
      <PlayButton onClick={() => setPlaying(true)}/>
      {playing && (
        <ExamPlayer questions={randomizedQuestions} callbackStop={stoppedPlay}/>
      )}
    </>
  );
}

