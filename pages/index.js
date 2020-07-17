import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
// import { Button } from 'antd';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/Date';
import Link from 'next/link';

const Home = ({allPostsData}) => (
	<Layout home title="HomePage">
		<section className={utilStyles.headingMd}>
			<p>This is nextjs.</p>

			<ul>
			{
				allPostsData.map(({id, title, date}) => (
					<li className={utilStyles.listItem} key={id}>
						<Link href="/posts/[id]" as={`/posts/${id}`}>
						<a>{title}</a>
						</Link>
						<br />
						<small className={utilStyles.lightText}>
							<Date dateString={date}/>
						</small>
					</li>
				))
			}
			</ul>
		</section>
	</Layout>
)

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