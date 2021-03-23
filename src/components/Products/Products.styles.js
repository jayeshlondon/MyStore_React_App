import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid #4caf50;
  border-radius: 20px;
  height: 100%;
  margin-bottom: 1%;
  @media only screen and (max-width: 410px) {
    width: 130%;
  }
  @media only screen and (max-width: 360px) {
    width: 140%;
  }
  button {
    border-radius: 0 0 20px 20px;
    background-color: rgb(0, 0, 0, 0.1);
    color: black;
    font-weight: bold;
  }
  img {
    max-height: 250px;
    width: 100px;
    object-fit: cover;
    border-radius: 20px 20px 20px 20px;
  }
  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
  .textwrap {
    word-wrap: break-all;
    width: 1400px !important;
  }
  td {
    width: 200px;
    border: none;
  }
  table {
    border-collapse: collapse;
  }
  .odd {
    background-color: #beefc0;
    color: black;
  }
  .even {
    background-color: white;
    color: black;
  }
`;

export default Wrapper;
