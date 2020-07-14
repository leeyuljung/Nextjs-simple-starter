import Link from 'next/link';
import Layout from '../../components/Layout';

const FirstPost = () => (
	<Layout title="FirstPost">
		<h4>First Post</h4>
		<Link href="/">
			<a>Back to home</a>
		</Link>
	</Layout>
)

export default FirstPost;