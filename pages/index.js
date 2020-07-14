import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
// import { Button } from 'antd';

const Home = () => (
	<Layout>
		Read 
		<Link href="/posts/first-post">
			<a> this page</a>
		</Link>
	</Layout>
)

// const Home = () => (
// 	<Layout title="this is index">
// 		<Fragment>
// 			<h3>Home</h3>
// 			<Link href="/list">
// 				<Button type='primary'>Link</Button>
// 			</Link>
// 		</Fragment>

// 		<style jsx>{`
// 			h3 {
// 				color: #abc;
// 			}
// 		`}
// 		</style>

// 		<style global jsx>{`
// 			.ant-btn-primary {
// 				background: #ea6d3f;
// 				border: none;
//       }
// 		`}
// 		</style>
// 	</Layout>
// )

export default Home;