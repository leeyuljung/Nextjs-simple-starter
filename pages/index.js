import React, { Fragment } from 'react';
import Link from 'next/link';
import { Button } from 'antd';
// import Head from 'next/head';

const Home = () => (
    <Fragment>
        <h3>Home</h3>
        <Link href="/list">
            <Button type='primary'>Link</Button>
        </Link>
    </Fragment>
)

export default Home;