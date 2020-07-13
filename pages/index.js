import React, { Fragment } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { Button } from 'antd';

const Home = () => (
	<Layout title="this is index">
		<Fragment>
			<h3>Home</h3>
			<Link href="/list">
				<Button type='primary'>Link</Button>
			</Link>
		</Fragment>
	</Layout>
)

export default Home;