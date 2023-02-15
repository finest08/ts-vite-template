import { createTheme, responsiveFontSizes, Theme } from '@mui/material/styles';

import BarlowSemiBold from './fonts/BarlowSemiBold.ttf';
import CabrionBold from './fonts/CabrionBold.ttf';
import InterRegular from './fonts/InterRegular.ttf';
import InterSemiBold from './fonts/InterSemiBold.ttf';
import InterThin from './fonts/InterThin.ttf';
import PaulGroteskRegularTrail from './fonts/PaulGroteskRegularTrail.otf';
import { palette } from './palette';
// import { typography } from './typography';

export const theme: Theme = responsiveFontSizes(createTheme({
    palette,
    // typography,
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
                    font-family: 'InterThin';
                    src: url(${InterThin});
                    font-style: normal;
                }
                @font-face {
                    font-family: 'InterRegular';
                    src: url(${InterRegular});
                    font-style: normal;
                }
                @font-face {
                    font-family: 'InterSemiBold';
                    src: url(${InterSemiBold});
                    font-style: normal;
                }
                @font-face {
                    font-family: 'BarlowSemiBold';
                    src: url(${BarlowSemiBold});
                    font-style: normal;
                }
                @font-face {
                    font-family: 'CabrionBold';
                    src: url(${CabrionBold});
                    font-style: normal;
                }
                  @font-face {
                    font-family: 'PaulGroteskRegularTrail';
                    src: url(${PaulGroteskRegularTrail});
                    font-style: normal;
                }
            `,
        }
    }
}));

export default theme;