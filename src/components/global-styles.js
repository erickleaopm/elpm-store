import { createGlobalStyle } from 'styled-components';

const GlobalStylesStyled = createGlobalStyle`
  :root {
    --bgshade: #eeeffb;
    --greytext: #151875;
    --primary: #fb2e86;
    --white: #ffffff;
    --linear: linear-gradient(135deg, #FA3BE5 0%, #FF289F 100%);
    --linerbg: linear-gradient(32deg, #f3f9ff 0%, #f1f0ff 100%);
    --mintgreengradiant: linear-gradient(42deg, #36e6d5 0%, #29e871 100%);
    --text: #151875;
    --red: #fb2448;
    --subtextcolor: linear-gradient(32deg, #f3f9ff 0%, #f1f0ff 100%);
    --subtextcolor: #8a8fb9;
    --bg: #ebebeb;
    --black: #111111;
    --subtitles-22bold: 700 1.375rem/normal Inter;
    --subtitles-32bold: 700 2rem/2.5rem Inter;
    --body-18regular: 400 1.125rem/2rem Inter;
    --body-18regular_u: 400 1.125rem/2rem Inter;
    --body-16regular: 400 1rem/1.5rem Inter;
    --body-18semibold: 600 1.125rem/2rem Inter;
  }

  body {
    margin: 0;
    background: var(--bg);
    color: var(--greytext);
    font: var(--body-16regular);
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    max-inline-size: 1366px;
  }
`;

export default GlobalStylesStyled;
