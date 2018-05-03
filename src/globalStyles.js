import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

const fontUrl = 'https://fonts.googleapis.com/css?family=Open+Sans:300,400';

export default injectGlobal`
  ${styledNormalize}

  @font-face {
    font-family:'Open Sans';
    src: url(${fontUrl}),
  }

  body {
    background: #f4f5f7;
    font-family: 'Open Sans', sans-serif;
  }

`;
