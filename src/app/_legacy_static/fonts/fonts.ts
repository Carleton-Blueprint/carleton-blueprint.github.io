import PoppinsEOT from './poppins-v15-latin-regular.eot';
import PoppinsWOFF2 from './poppins-v15-latin-regular.woff2';
import PoppinsWOFF from './poppins-v15-latin-regular.woff';
import PoppinsSVG from './poppins-v15-latin-regular.svg';

import PoppinsTTF from './poppins-v15-latin-regular.ttf'; 
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /* poppins-regular - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: url(${PoppinsEOT}); /* IE9 Compat Modes */
    src: local(''),
        url(${PoppinsEOT}) format('embedded-opentype'), /* IE6-IE8 */
        url(${PoppinsWOFF2}) format('woff2'), /* Super Modern Browsers */
        url(${PoppinsWOFF}) format('woff'), /* Modern Browsers */
        url(${PoppinsTTF}) format('truetype'), /* Safari, Android, iOS */
        url(${PoppinsSVG}) format('svg'); /* Legacy iOS */
  }
`;
