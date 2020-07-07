import React from 'react';
import '../../../style.css';

import { TableCell, TextField, makeStyles, Tooltip } from '@material-ui/core';

const useStyles = makeStyles({
  underline: {
    '&&&:before': {
      borderBottom: 'none',
    },
    '&&:after': {
      borderBottom: 'none',
    },
  },
  inputRoot: {
    fontSize: '14px',
  },
  labelRoot: {
    fontSize: '14px',
  },
});

export const BaseInputTableCell = ({
  tooltipText = '',
  helperText = '',
  label,
  value,
  onChangeAction,
}) => {
  const classes = useStyles();
  return (
    <TableCell align='center' padding='dense' size='small'>
      <Tooltip
        title={tooltipText}
        placement='bottom'
        arrow
        disableFocusListener
        disableTouchListener
      >
        <TextField
          InputProps={{ classes: { root: classes.inputRoot }, classes }}
          InputLabelProps={{ classes: { root: classes.labelRoot }, classes }}
          size='small'
          helperText={helperText}
          label={label}
          value={value}
          onChange={onChangeAction}
        />
      </Tooltip>
    </TableCell>
  );
};
