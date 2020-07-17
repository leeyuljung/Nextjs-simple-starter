import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/Date';
import utilStyles from '../../styles/utils.module.css';

export default function Post({postData}) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h3 className={utilStyles.headingXl}>{postData.title}</h3>
				<div className={utilStyles.lightText}>
					<Date dateString={postData.date}/>
				</div>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml}}/>
			</article>
		</Layout>
	)
}

// 取得動態 path
export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
			paths,
			fallback: false
	}
}

// 取得動態 data，傳進 props
export async function getStaticProps({params}) {
	const postData = await getPostData(params.id);
	return {
			props: {
					postData
			}
	}
}