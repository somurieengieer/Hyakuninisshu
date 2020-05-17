import React from 'react';
import {useSelector} from "react-redux";
import {selectActiveNumbers} from "../song/songSlice";
import {SongInfo} from "../song/SongInfo";
import {shuffle} from "../../utils/Utils";
import {ExamComponent} from "./ExamComponent";


export function ExamShimoKamiComponent() {

  const activeSongNums = useSelector(selectActiveNumbers);
  const questions = shuffle(activeSongNums)
    .map(num => new SongInfo(num))
    .map(info => ({
      question: [`下の句: ${info.kimariji_shimo}`],
      answer: `上の句: ${info.kimariji_kami}`,
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

