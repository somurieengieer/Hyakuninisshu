import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {selectActiveNumbers} from "../song/songSlice";
import {ExamPlayer} from "./ExamPlayer";
import {SongInfo} from "../song/SongInfo";
import {PlayButton} from "../player/PlayButton";


// Fisher–Yates アルゴリズム
function shuffle([...arr]) {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
}

export function ExamShimoKamiComponent() {

  const activeSongNums = useSelector(selectActiveNumbers);
  const [playing, setPlaying] = useState<boolean>(false);
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

  const stoppedPlay = () => {
    setPlaying(false)
  };

  return (
    <>
      <PlayButton onClick={() => setPlaying(true)}>
        下の句決まり字の暗記テスト
      </PlayButton>
      {playing && (
        <ExamPlayer questions={questions} callbackStop={stoppedPlay}/>
      )}
    </>
  );
}

