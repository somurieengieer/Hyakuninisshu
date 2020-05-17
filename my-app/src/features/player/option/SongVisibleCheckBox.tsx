import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectSongVisible, setSongVisible} from "../../../slice/player/option/playOptionSlice"
import {Checkbox, FormControlLabel} from "@material-ui/core";


export function SongVisibleCheckBox() {
  const dispatch = useDispatch();

  const continuousPlayBack = useSelector(selectSongVisible);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSongVisible(event.target.checked))
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={continuousPlayBack}
            onChange={handleChange}
            name="songVisible"
            color="secondary"
          />
        }
        label="歌を表示"
      />
    </div>
  );
}
