import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      {/* Spinner */}
      <div className="spinner" />
      {/* Video */}
      <video
        src="/assets/img/IMG_8014.mp4"
        autoPlay
        loop
        muted
        className="promo-video"
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column; /* Stack items vertically */
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  background: white; /* White background */
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

  /* Style for the video */
  .promo-video {
    margin-top: 10px; /* Reduced spacing between spinner and video */
    width: 80vw; /* Responsive width based on viewport width */
    max-width: 1000px; /* Maximum size for large screens */
    height: auto; /* Maintain aspect ratio */
    display: block; /* Ensure the video behaves as a block element */
    margin-bottom: 0; /* Remove any bottom margin */
    padding: 0; /* Remove any padding */
    outline: none; /* Remove any focus outline */
    border: none; /* Explicitly remove borders */
  }

  @keyframes spinner-rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  /* Responsive adjustments for smaller screens */
  @media (max-width: 768px) {
    .spinner {
      width: 20vw;
      height: 20vw;
    }

    .promo-video {
      width: 90vw; /* Use more of the screen width on smaller devices */
    }
  }

  @media (max-width: 480px) {
    .spinner {
      width: 25vw;
      height: 25vw;
    }

    .promo-video {
      width: 95vw; /* Use almost the full screen width on very small devices */
    }
  }
`;

export default Loader;