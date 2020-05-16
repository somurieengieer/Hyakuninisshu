import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, IconButton, Modal} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import {theme} from "../../materialui/theme";


const useStyles = makeStyles({
  paper: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/image/washi.jpg)`,
  },
  paperTop: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/image/wagara_top.png)`,
    backgroundRepeat: 'no-repeat',
  },
  paperBottom: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/image/wagara_bottom.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right 0px',
  },
  iconBig: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '6em'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '10em'
    }
  },
  iconSmall: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '3em'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '6em'
    }
  },
  songArea: {
    [theme.breakpoints.down('xs')]: {
      width: 400
    },
    [theme.breakpoints.up('sm')]: {
      width: 560,
    }
  },
});

interface ModalPlayerProps {
  callbackStop: () => void
}

// 序歌も含めて流す連番を引数とする
export const ModalPlayer: React.FC<ModalPlayerProps> =
  ({callbackStop, children}) => {

    const classes = useStyles();

    const stop = () => {
      callbackStop()
    };

    return (
      <Modal
        open={true}
        onClose={stop}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box m={1} p={1} className={classes.paper}>
          <Box className={classes.paperTop}>
            <Box display="flex" justifyContent="flex-end" p={1}>
              <IconButton onClick={stop}
                          component="span">
                <CloseIcon style={{fontSize: '3em'}}/>
              </IconButton>
            </Box>
          </Box>

          {children}

        </Box>
      </Modal>
    );
  };
