import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
  margin: 40px;
  tr {
    background-color: #4caf50;
    color: white;
    height: 50px;
  }
  th {
    width: 600px;
    border: 0;
  }
  table,
  thead {
    margin: 5px 0 0 20px;
    border-collapse: collapse;
  }
  input {
    width: 40%;
    margin-left: 1%;
    padding: 5px;
    &:focus {
      outline: 0 !important;
    }
  }

  .searchDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1%;
  }
`;
export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 10px;
`;