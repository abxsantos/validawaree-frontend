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
    <TableCell
      style={{
        borderLeft: '1px solid #E0E0E0',
        borderRight: '1px solid #E0E0E0',
      }}
      variant='body'
      align='right'
    >
      <Tooltip
        title={tooltipText}
        placement='bottom'
        arrow
        disableFocusListener
        disableTouchListener
      >
        <TextField
          InputProps={{
            style: { fontSize: '16px' },
            classes: { root: classes.inputRoot, root: classes.underline },
          }}
          InputLabelProps={{
            variant: 'filled',
            style: { fontSize: '12px' },
            classes: { root: classes.labelRoot, root: classes.underline },
          }}
          size='normal'
          helperText={helperText}
          label=''
          value={value}
          onChange={onChangeAction}
        />
      </Tooltip>
    </TableCell>
  );
};
