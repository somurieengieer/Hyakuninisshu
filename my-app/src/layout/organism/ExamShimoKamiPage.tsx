import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectActiveNumbers} from "../../slice/song/songSlice";
import {ExamPlayer} from "../../features/memorize/ExamPlayer";
import {shuffle} from "../../utils/Utils";
import {push} from "connected-react-router";
import {myUrl} from "../Urls";
import {SongInfo} from "../../features/song/SongInfo";
import {QuestionText} from "../../features/memorize/question/QuestionText";


export function ExamShimoKamiPage() {

  const dispatch = useDispatch()
  const activeSongNums: number[] = useSelector(selectActiveNumbers);
  const questions = activeSongNums
    .map(num => new SongInfo(num))
    .map(info => ({
      question: (<QuestionText value={`下の句: ${info.kimariji_shimo}`}/>),
      answer: `上の句: ${info.kimariji_kami}`,
      explanation: [
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

