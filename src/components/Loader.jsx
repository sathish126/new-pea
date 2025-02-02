import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="spinner" />
      <h1 className="title font-goodBrush">PRODOTHON'25</h1>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  z-index: 9999;

  .spinner {
    width: 120px;
    height: 120px;
    display: grid;
    color: #004dff;
    background: radial-gradient(farthest-side, currentColor calc(100% - 14px), #0000 calc(100% - 12px) 0);
    -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 30px), #000 calc(100% - 26px));
    border-radius: 50%;
    animation: spinner-rotate 2s infinite linear;
  }

  .spinner::before,
  .spinner::after {
    content: "";
    grid-area: 1/1;
    background: linear-gradient(currentColor 0 0) center,
                linear-gradient(currentColor 0 0) center;
    background-size: 100% 22px, 22px 100%;
    background-repeat: no-repeat;
  }

  .spinner::after {
    transform: rotate(45deg);
  }

  .title {
    margin-top: 20px;
    font-size: 24px;
    font-goodBrush;
    font-weight: bold ;
    color: #004dff;
    animation: colorShift 3s infinite alternate;
  }

  @keyframes spinner-rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  @keyframes colorShift {
    0% {
      color: #004dff;
    }
    50% {
      color: #ff4500;
    }
    100% {
      color: #32cd32;
    }
  }
`;

export default Loader;
