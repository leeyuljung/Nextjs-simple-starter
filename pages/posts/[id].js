import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/Date';

export default function Post({postData}) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			{postData.id}
			<br />
			{postData.title}
			<br />
			<Date dateString={postData.date}/>
			<br />
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml}}/>
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