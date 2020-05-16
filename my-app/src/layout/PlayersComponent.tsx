import React from 'react';
import {AudioPlayerComponent} from "../features/audio/AudioPlayerComponent";
import {ExamKamiShimoComponent} from "../features/memorize/ExamKamiShimoComponent";
import {ExamShimoKamiComponent} from "../features/memorize/ExamShimoKamiComponent";
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";


const useStyles = makeStyles({});

const FlexCenter: React.FC = ({children}) => {
  return (
    <Box display="flex" justifyContent="center" m={1} p={1}>
      <Box>
        {children}
      </Box>
    </Box>
  )
};

export function PlayersComponent() {

  return (
    <>
      {[
        (<AudioPlayerComponent/>),
        (<ExamKamiShimoComponent/>),
        (<ExamShimoKamiComponent/>)
      ].map(item => (
        <FlexCenter>{item}</FlexCenter>
      ))}
    </>
  );
}

