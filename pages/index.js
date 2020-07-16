import Layout from '../components/Layout';
// import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
// import { Button } from 'antd';
import { getSortedPostsData } from '../lib/posts';

const Home = ({allPostsData}) => (
	<Layout home title="HomePage">
		<section className={utilStyles.headingMd}>
			<p>This is nextjs practice.</p>

			<ul>
			{
				allPostsData.map(({id, title, date}) => (
					<li key={id}>
						{id}
						<br />
						{title}
						<br />
						{date}
					</li>
				))
			}
			</ul>
			{/* <div dangerouslySetInnerHTML={{ __html: allPostsData }} /> */}
		</section>
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

// 取得 data -> props
export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData
		}
	}
} 

export default Home;