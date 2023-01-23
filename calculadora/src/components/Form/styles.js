import styled from "styled-components";

export const Form1 = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;

  h3 {
    font-size: 24px;
    line-height: 28px;
  }

  line-height: 40px;

  font-family: "IBM Plex Sans", sans-serif;
  font-family: "Inter", sans-serif;
  font-family: "Source Sans Pro", sans-serif;
  color: #656565;

  font-size: 14px;

  .pparcelas {
    font-family: "SourceSansPro";
    font-size: 11px;
    line-height: 13px;

    color: #cecece;
  }

  input {
    border: 1px solid #dde6e9;
    border-radius: 4px;
    height: 37px;

    font-size: 14px;
    line-height: 16px;

    color: #000000;
  }

  input:hover {
    border: 1px solid #66afe9;
  }
`;
