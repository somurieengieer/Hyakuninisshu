import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Button, Card, CardContent, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {replace} from '../../slice/song/songSlice';
import {selectActiveArchive, setArchiveByTitle, SongArchive} from "../../slice/songArchive/songArchiveSlice";
import classNames from "classnames";

const useStyles = makeStyles({
  root: {
    width: 150,
  },
  active: {
    backgroundColor: '#F0D0A0',
  },
});

export interface SongArchiveGroupProps {
  groupTitle: string,
  archives: SongArchive[]
}

export function SongArchiveGroup({groupTitle, archives}: SongArchiveGroupProps) {
  const classes = useStyles();
  const dispatch = useDispatch()
  const activeArchive = useSelector(selectActiveArchive);

  const changeArchive = (selectedArchive: SongArchive): void => {
    dispatch(setArchiveByTitle(selectedArchive.title))
    dispatch(replace(selectedArchive.songs))
  };

  return (
    <>
      <Typography variant="subtitle1">
        {groupTitle}
      </Typography>
      <div style={{width: '100%'}}>
        {/*<Box*/}
        {/*  display="flex"*/}
        {/*  flexWrap="wrap"*/}
        {/*  style={{ width: '100%' }}*/}
        {/*>*/}
        {archives.map((archive) => (
          // <Box>
          <Button key={archive.title}
                  onClick={() => changeArchive(archive)}>
            <Card className={
              classNames(
                classes.root,
                {[classes.active]: activeArchive.title === archive.title}
              )
            }>
              <CardContent>
                <Typography variant="caption">
                  {archive.title}
                </Typography>
              </CardContent>
            </Card>
          </Button>
          // </Box>
        ))}
        {/*</Box>*/}
      </div>
    </>
  );
}

