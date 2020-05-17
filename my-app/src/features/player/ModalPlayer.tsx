import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, IconButton, Modal, Typography} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import {theme} from "../../materialui/theme";


const useStyles = makeStyles({
  modal: {
    margin: theme.spacing(2),
    height: 'calc(100vh * 0.9)',
  },

  // ModalPlayerの背景画像設定
  paper: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/image/washi.jpg)`,
  },
  paperTop: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/image/wagara_top.png)`,
    backgroundRepeat: 'no-repeat',
    minHeight: '150px' //背景画像の枠を確保するため
  },
  paperMain: {
    [theme.breakpoints.down('xs')]: {
      width: 300
    },
    [theme.breakpoints.up('sm')]: {
      width: 560,
    },
  },
  paperBottom: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/image/wagara_bottom.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right 0px',
    // bottom: 0,
    minHeight: '150px' //背景画像の枠を確保するため
  },

  // フッターを固定化するためのレイアウト
  layoutBody: {
    display: 'flex',
    flexFlow: 'column',
    height: '100%'
  },
  layout_header: {
    // height: '40px', // 背景画像などに合わせて設定
  },
  layoutMain: {
    flex: 1,

    // モーダルのサイズが変更しないようmain内のサイズが大きくなりすぎない制御
    maxHeight: 'calc(100vh - 150px*2)',
    overflow: 'scroll',
  },
  layoutFooter: {
    // height: '40px', // 背景画像などに合わせて設定
  },
});

interface ModalPlayerProps {
  callbackStop: () => void
  headerText: string
  footerJSX?: JSX.Element
}

// 序歌も含めて流す連番を引数とする
export const ModalPlayer: React.FC<ModalPlayerProps> =
  ({callbackStop, headerText, footerJSX, children}) => {

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
        className={[classes.modal,].join(' ')}
      >
        <Box m={1} p={1} className={[classes.paper, classes.layoutBody].join(' ')}>
          <Box className={classes.paperTop}>
            <Box display="flex" justifyContent="flex-end" p={1}>
              <IconButton onClick={stop}
                          component="span">
                <CloseIcon style={{fontSize: '2em'}}/>
              </IconButton>
            </Box>
            <Box display="flex" justifyContent="center">
              <Typography variant="h6">
                {headerText}
              </Typography>
            </Box>
          </Box>

          <Box display="flex" justifyContent="center" className={classes.layoutMain}>
            <Box className={[classes.paperMain].join(' ')}>
              {children}
            </Box>
          </Box>

          <Box display="flex" justifyContent="center"
               className={[classes.paperBottom, classes.layoutFooter].join(' ')}
          >
            {footerJSX}
          </Box>
        </Box>
      </Modal>
    );
  };
