import React from 'react';
import styled from 'styled-components';

import TextField from 'components/common/TextField';
import FontIcon from 'components/common/FontIcon';

function Search({ value, onChange }) {
  return (
    <View>
      <Input value={value} placeholder="Search" onChange={onChange} />
      {value && <ClearSearch icon="close" onClick={() => onChange('')} />}
    </View>
  );
}

export default Search;

const View = styled.div`
  position: relative;
`;

const Input = styled(TextField)`
  padding-right: 30px;
`;

const ClearSearch = styled(FontIcon)`
  font-size: 22px;
  color: #797979;
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  box-sizing: border-box;
  padding: 0 6px;
  cursor: pointer;
`;
