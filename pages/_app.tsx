import Head from 'next/head';
import type { AppProps } from 'next/app';

import '@styles/globals.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<Head>
				<title>
					Сапёр
				</title>
				<link rel='icon' href='/favicon.ico' type='image/x-icon' />
				<meta
					name='description'
					// eslint-disable-next-line max-len
					content='«Сапер» – несложная игра, которая, тем не менее, развивает внимание, память и логику. Основная ее цель — найти и обозначить флажками мины.' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://vk-intership.vercel.app/' />
				<meta property='og:title' content='Сапёр' />
				<meta
					property='og:description'
					// eslint-disable-next-line max-len
					content='«Сапер» – несложная игра, которая, тем не менее, развивает внимание, память и логику. Основная ее цель — найти и обозначить флажками мины.' />
										
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://vk-intership.vercel.app/' />
				<meta property='twitter:title' content='Сапёр' />
				<meta
					property='twitter:description'
					// eslint-disable-next-line max-len
					content='«Сапер» – несложная игра, которая, тем не менее, развивает внимание, память и логику. Основная ее цель — найти и обозначить флажками мины.' />
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default App;
