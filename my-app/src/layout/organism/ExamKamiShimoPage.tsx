import React from 'react';
import {useSelector} from "react-redux";
import {selectActiveNumbers} from "../../slice/song/songSlice";
import {ExamPlayer} from "../../features/memorize/ExamPlayer";
import {shuffle} from "../../utils/Utils";
import {QuestionText} from "../../features/memorize/question/QuestionText";
import {SongInfo} from "../../features/song/SongInfo";


export function ExamKamiShimoPage() {

  const activeSongNums: number[] = useSelector(selectActiveNumbers);
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
    <ExamPlayer questions={shuffle(questions)}/>
  );
}

