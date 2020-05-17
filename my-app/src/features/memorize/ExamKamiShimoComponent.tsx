import React from 'react';
import {useSelector} from "react-redux";
import {selectActiveNumbers} from "../../slice/song/songSlice";
import {SongInfo} from "../song/SongInfo";
import {ExamComponent} from "./ExamComponent";
import {QuestionText} from "./question/QuestionText";


export function ExamKamiShimoComponent() {

  const activeSongNums = useSelector(selectActiveNumbers);
  const questions = activeSongNums
    .map(num => new SongInfo(num))
    .map(info => ({
      question: (<QuestionText value={`上の句: ${info.kimariji_kami}`}/>),
      answer: `下の句: ${info.kimariji_shimo}`,
      explanation: [
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

