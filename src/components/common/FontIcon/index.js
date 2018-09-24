import styled from 'styled-components';

export default styled.i.attrs({
  className: function(props) {
    return `fa fa-${props.icon}`;
  },
  'aria-hidden': true,
})``;
