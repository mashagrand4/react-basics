import React from 'react';
import styled from 'styled-components';

import FontIcon from 'components/common/FontIcon';

function CheckBox({ isChecked, onChange, id, ...props }) {
  return (
    <View {...props}>
      <StyledInput>
        <NativeInput type="checkbox" onChange={onChange} id={id} />
        {isChecked ? (
          <FontIcon icon="check-square-o" />
        ) : (
          <FontIcon icon="square-o" />
        )}
      </StyledInput>
    </View>
  );
}
export default CheckBox;

const View = styled.div`
  display: flex;
`;

const NativeInput = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
`;

const StyledInput = styled.div`
  position: relative;
`;
