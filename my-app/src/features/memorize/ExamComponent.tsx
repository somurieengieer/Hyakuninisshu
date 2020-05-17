import React, {useState} from 'react';
import {ExamPlayer} from "./ExamPlayer";
import {PlayButton} from "../player/PlayButton";
import {QuestionItem} from "./question/Question";


interface ExamComponentProps {
  questions: QuestionItem[]
}

export function ExamComponent({questions}: ExamComponentProps) {

  const [playing, setPlaying] = useState<boolean>(false);

  const stoppedPlay = () => {
    setPlaying(false)
  };

  return (
    <>
      <PlayButton onClick={() => setPlaying(true)}/>
      {playing && (
        <ExamPlayer questions={questions} callbackStop={stoppedPlay}/>
      )}
    </>
  );
}

