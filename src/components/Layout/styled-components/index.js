import styled from "styled-components";

export const StyledContainer = styled.div`
  display: grid;
  width: 900px;
  grid-template-columns: repeat(7, minmax(90px, 1fr));
  grid-gap: 1px;
  background: #333;
`;

export const StyledCalItem = styled.div`
  background-color: #4d4d4d;
  color: #fff;
  justify-content: left;
  align-content: top;
  min-height: 60px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "dayName"
    "day";

  div {
    justify-self: left;
  }

  div:nth-child(2) {
    grid-area: dayName;
    display: flex;
    background: #333;
    width: 100%;
    justify-content: center;
    align-self: center;
    padding: 7px;
    text-align: center;
    box-sizing: border-box;
    font-size: 12px;
  }

  div:nth-child(1) {
    grid-area: day;
    padding: 10px 40px 60px 10px;
    box-sizing: border-box;
    font-size: 14px;
  }
`;
