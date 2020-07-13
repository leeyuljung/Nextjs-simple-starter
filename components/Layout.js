import Head from 'next/head';

export default ({children, title = 'default title'}) => (
	<div>
		<Head>
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<meta charSet='utf-8' />
			<title>{ title }</title>
		</Head>
		{children}
	</div>
);