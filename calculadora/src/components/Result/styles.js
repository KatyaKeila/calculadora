import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background: rgba(209, 220, 227, 0.18);
  padding: 4rem;
  color: #5d9cec;

  font-family: "IBM Plex Sans", sans-serif;
  font-family: "Inter", sans-serif;
  font-family: "Source Sans Pro", sans-serif;

  .pprincipal {
    font-style: italic;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;

    color: #3d75bb;
    border-bottom: 1px solid #5d9cec;
  }

  p {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 46px;
    color: #5d9cec;
  }
`;
