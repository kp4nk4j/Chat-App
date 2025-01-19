import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const storedData = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY);

    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setUserName(parsedData.username);
      } catch (error) {
        console.error('Error parsing data from localStorage:', error);
      }
    } else {
      console.log('No data found in localStorage for the given key.');
    }
  }, []);

  const showMovieSection = () => {
    console.log('Movie section button clicked');
  }

  const handleMouseOver = (e) => {
    e.target.style.transform = 'scale(1.5)'; // Slightly enlarge on hover
    e.target.style.backgroundColor = '#e64a19'; // Darker shade on hover
  };

  const handleMouseOut = (e) => {
    e.target.style.transform = 'scale(1)'; // Reset size
    e.target.style.backgroundColor = '#ff5722'; // Reset color
  };

  return (
    <Container>
      <ButtonContainer>
        <div
          onClick={showMovieSection}
          style={clickableDivStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Click Here For More Entertainment
        </div>
      </ButtonContainer>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;

const clickableDivStyle = {
  backgroundColor: '#ff5722', // A vibrant orange-red color
  color: '#fff', // White text for contrast
  fontSize: '18px', // Larger font for visibility
  fontWeight: 'bold', // Bold text for emphasis
  padding: '10px 20px', // Padding for a clickable button feel
  borderRadius: '8px', // Rounded corners
  textAlign: 'center', // Center-align text
  cursor: 'pointer', // Pointer cursor to indicate clickability
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
  transition: 'transform 0.2s, background-color 0.3s', // Smooth animations
};

const ButtonContainer = styled.div`
  position: relative;
  top: -30px; // Move it 30px upward
`;
