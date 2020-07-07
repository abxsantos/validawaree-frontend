import React from 'react';
import {
  ButtonGroup,
  ButtonMenu,
} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPencilAlt,
} from '@fortawesome/free-solid-svg-icons';

import AddRowButton from './AddRowButton'
import AddColumnButton from './AddColumnButton'
import RemoveRowButton from './RemoveRowButton'
import RemoveColumnButton from './RemoveColumnButton'
import CalculateLinearityButton from './CalculateLinearityButton'
import LinearityMassUnitSelector from '../selector/LinearityMassUnitSelector'
import LinearityVolumeUnitSelector from '../selector/LinearityVolumeUnitSelector'


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
          <LinearityMassUnitSelector />
          <LinearityVolumeUnitSelector />
        </ButtonMenu>
        <AddRowButton />
        <AddColumnButton />
        <RemoveRowButton />
        <RemoveColumnButton />
        <CalculateLinearityButton/>
      </ButtonGroup>
    </div>
  );
};
