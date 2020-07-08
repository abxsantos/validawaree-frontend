import React from 'react';

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
    <TableCell align='center' padding='normal' size='medium'>
      <Tooltip
        title={tooltipText}
        placement='bottom'
        arrow
        disableFocusListener
        disableTouchListener
      >
        <TextField
          style={{ paddingBottom: 15 }}
          InputProps={{
            style: { fontSize: '14px' },
            classes: { root: classes.inputRoot, root: classes.underline },
          }}
          InputLabelProps={{
            style: { fontSize: '12px' },
            classes: { root: classes.labelRoot, root: classes.underline },
          }}
          size='normal'
          helperText={helperText}
          label={label}
          value={value}
          onChange={onChangeAction}
        />
      </Tooltip>
    </TableCell>
  );
};
