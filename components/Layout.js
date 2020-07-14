import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';

export default ({children, title = "Home", home}) => (
	<div className={styles.container}>
		<Head>
			<meta name = 'viewport' content = 'initial-scale=1.0, width=device-width' />
			<meta charSet = 'utf-8' />
			<title>{ title }</title>
		</Head>
		<header className={styles.header}>
			{
				home? (
					<>
						<img
							src="/images/profile.jpg"
							className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
						/>
						<h4 className={utilStyles.heading2Xl}>OOO</h4>
					</>
				):(
					<>
						<Link href="/">
							<a>
								<img 
									src="/images/profile.jpg"
									className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
								/>
							</a>
						</Link>
						<h3 className={utilStyles.headingLg}>
							<Link href="/">
								<a>OOO</a>
							</Link>
						</h3>
					</>
				)
			}
		</header>
		<main>{children}</main>
		{
			!home && (
				<div className={styles.backToHome}>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)
		}
	</div>
);