import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectActiveNumbers} from "../../slice/song/songSlice";
import {push} from "connected-react-router";
import {myUrl} from "../Urls";
import {ExamPlayer} from "../../features/memorize/ExamPlayer";
import {shuffle} from "../../utils/Utils";
import {SongInfo} from "../../features/song/SongInfo";
import {QuestionCard} from "../../features/memorize/question/QuestionCard";


export function ExamShimoKamiCardPage() {

  const dispatch = useDispatch()
  const activeSongNums: number[] = useSelector(selectActiveNumbers);
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

  const goToTopPage = () => {
    dispatch(push(myUrl.topPage))
  }

  return (
    <ExamPlayer questions={shuffle(questions)} callbackStop={goToTopPage}/>
  );
}

