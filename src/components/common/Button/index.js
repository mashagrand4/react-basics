import styled from 'styled-components';
import colors from 'constants/colors';

export default styled.button`
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
  background-color: ${function(props) {
    return props.color || colors.aero;
  }};
  min-width: 120px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
