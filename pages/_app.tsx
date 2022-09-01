import type { AppProps } from 'next/app';
import { Provider } from "react-redux";
import { ThemeProvider } from 'styled-components';
import { AppTheme } from '../global/theme';
import { GlobalStyle } from '../global/theme/GlobalStyles';
import {store} from '../redux/store'


function MyApp({ Component, pageProps }: AppProps) {
  
  return <Provider store={store}>
    <ThemeProvider theme={AppTheme}>
      <GlobalStyle />
            <Component {...pageProps} />
    </ThemeProvider>
          </Provider>
}

export default MyApp
