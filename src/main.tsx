import isPropValid from '@emotion/is-prop-valid';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { StyleSheetManager } from 'styled-components';
import App from './App.tsx';
import './assets/styles/font.css';
import { GlobalStyleProvider } from './assets/styles/global.ts';

console.log(import.meta.env.BASE_URL);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StyleSheetManager shouldForwardProp={isPropValid}>
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<GlobalStyleProvider />
			<App />
		</BrowserRouter>
	</StyleSheetManager>
);
