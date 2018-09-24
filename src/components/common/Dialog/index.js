import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const modalRoot = document.getElementById('modal-root');

const View = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  font-family: Roboto, sans-serif;
  color: #333;
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  background-color: white;
  box-shadow: 0 0 3px black;
  width: 100%;
  max-width: 600px;
`;

const Title = styled.h3`
  margin: 0;
  padding: 20px;
  font-size: 26px;
  font-weight: 500;
  border-bottom: 1px solid #eee;
`;

const Content = styled.div`
  padding: 20px;
`;

const Actions = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

class Dialog extends Component {
  static Title = Title;
  static Content = Content;
  static Actions = Actions;

  render() {
    const { children, isOpen } = this.props;

    if (!isOpen) {
      return null;
    }

    return ReactDOM.createPortal(
      <View>
        <Overlay>
          <ContentWrapper>{children}</ContentWrapper>
        </Overlay>
      </View>,
      modalRoot,
    );
  }
}

export default Dialog;
