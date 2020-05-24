import React from 'react';
import {AudioPlayer} from "../../features/audio/AudioPlayer";
import {useDispatch, useSelector} from "react-redux";
import {push} from "connected-react-router";
import {myUrl} from "../Urls";
import {selectActiveNumbers} from "../../slice/song/songSlice";
import {shuffle} from "../../utils/Utils";


export function PlayPage() {

  const dispatch = useDispatch()

  const activeSongNums = useSelector(selectActiveNumbers);
  let playSongs = [0].concat(shuffle(activeSongNums));

  const goToTopPage = () => {
    dispatch(push(myUrl.topPage))
  }

  return (
    <>
      <AudioPlayer songNums={playSongs} callbackStop={goToTopPage}/>
    </>
  );
}

