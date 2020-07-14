import Head from 'next/head';
import styles from '../styles/layout.module.css'

export default ({children, title = "Home"}) => (
	<div className={styles.container}>
		<Head>
			<meta name = 'viewport' content = 'initial-scale=1.0, width=device-width' />
			<meta charSet = 'utf-8' />
			<title>{ title }</title>
		</Head>
		{children}
	</div>
);