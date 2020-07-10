import React, { Fragment } from 'react';
import Link from 'next/link';

const Home = () => (
    <Fragment>
        <h3>Home</h3>
        <Link href="/list">
            <a>Link</a>
        </Link>
    </Fragment>
)

export default Home;