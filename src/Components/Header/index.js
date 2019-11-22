import styled from 'styled-components';

export default styled.header`
  background: #4a90c2;
  display: flex;
  justify-content: center;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding: 0 42px;
    color: #fff;
    min-width: 980px;
    font-size: 14px;

    img {
      height: 34px;
    }

    span {
      font-size: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    div {
      display: flex;
      align-items: center;

      i {
        margin-left: 8px;
      }
    }
  }
`;
