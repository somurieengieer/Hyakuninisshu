import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {selectActiveNumbers} from "../song/songSlice";
import {ExamPlayer} from "./ExamPlayer";
import {SongInfo} from "../song/SongInfo";
import {PlayButton} from "../player/PlayButton";
import {shuffle} from "../../utils/Utils";


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
      </PlayButton>
      {playing && (
        <ExamPlayer questions={questions} callbackStop={stoppedPlay}/>
      )}
    </>
  );
}

