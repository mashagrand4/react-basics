import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from 'constants/colors';

export default styled(Link)`
  text-decoration: none;
  color: ${function(props) {
    return props.color || colors.aero;
  }}
  
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
