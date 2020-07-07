import React from 'react';
import {
  ButtonGroup,
  Button,
  ButtonIcon,
  ButtonMenu,
  MenuItem,
} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faPencilAlt,
  faTrash,
  faFlask,
} from '@fortawesome/free-solid-svg-icons';

export const GroupButton = () => {
  return (
    <div className='rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap'>
      <ButtonGroup className='rainbow-m-around_medium'>
      <ButtonMenu
          menuAlignment='right'
          menuSize='x-small'
          icon={<FontAwesomeIcon icon={faPencilAlt} />}
          label='Change unit'
        >
          <MenuItem label='Change volume unit' />
          <MenuItem label='Change mass unit' />
        </ButtonMenu>

        <Button variant='neutral'>
          <FontAwesomeIcon icon={faPlus} className='rainbow-m-right_small' />
            Add Rows
        </Button>
        <Button variant='neutral'>
          <FontAwesomeIcon icon={faPlus} className='rainbow-m-right_small' />
            Add Columns
        </Button>
        <Button variant='neutral'>
          <FontAwesomeIcon icon={faTrash} className='rainbow-m-right_small' />
            Remove Rows
        </Button>
        <Button variant='neutral'>
          <FontAwesomeIcon icon={faTrash} className='rainbow-m-right_small' />
           Remove Columns
        </Button>
        <Button variant='neutral'>
          <FontAwesomeIcon icon={faFlask} className='rainbow-m-right_small' />
           Calculate Linearity
        </Button>
      </ButtonGroup>
    </div>
  );
};
