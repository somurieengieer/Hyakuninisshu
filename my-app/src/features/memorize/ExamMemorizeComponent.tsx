import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {selectActiveNumbers} from "../song/songSlice";
import {ExamMemorizePlayer} from "./ExamMemorizePlayer";
import {SongInfo} from "../song/SongInfo";
import {PlayButton} from "../player/PlayButton";
import {SongTypography} from "../audio/SongTypography";


// Fisher–Yates アルゴリズム
function shuffle([...arr]) {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
}

export function ExamMemorizeComponent() {

  const activeSongNums = useSelector(selectActiveNumbers);
  const [playing, setPlaying] = useState<boolean>(false);
  const questions = shuffle(activeSongNums)
    .map(num => new SongInfo(num))
    .map(info => ({
      question: [info.kimariji],
      answer: (<SongTypography song={info}/>), //info.song.join('\n'),
      explanation: [`歌人: ${info.singer}`,
        `上の句決まり字: ${info.kimariji}`,
        `下の句決まり字: ${info.shimo_kimariji}`
      ]
    }));

  const stoppedPlay = () => {
    setPlaying(false)
  };

  return (
    <>
      <PlayButton onClick={() => setPlaying(true)}>
        上の句決まり字の暗記テスト
      </PlayButton>
      {playing && (<ExamMemorizePlayer questions={questions} callbackStop={stoppedPlay}/>)}
    </>
  );
}

