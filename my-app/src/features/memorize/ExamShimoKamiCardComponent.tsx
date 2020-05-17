import React from 'react';
import {useSelector} from "react-redux";
import {selectActiveNumbers} from "../song/songSlice";
import {SongInfo} from "../song/SongInfo";
import {ExamComponent} from "./ExamComponent";
import {QuestionCard} from "./question/QuestionCard";


export function ExamShimoKamiCardComponent() {

  const activeSongNums = useSelector(selectActiveNumbers);
  const questions = activeSongNums
    .map(num => new SongInfo(num))
    .map(info => ({
      question: (<QuestionCard songInfo={info}/>),
      answer: `上の句: ${info.kimariji_kami}`,
      explanation: [
        `下の句: ${info.kimariji_shimo}`,
        '　',
        info.song.slice(0, 3).join('　'),
        info.song.slice(3, 5).join('　'),
        '　',
        `歌人: ${info.singer}`,
      ],
    }));

  return (
    <ExamComponent questions={questions}/>
  );
}

