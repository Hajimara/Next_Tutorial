import Head from 'next/head'
import axios from "axios";
import { useState, useEffect } from 'react';

import ItemList from '../src/component/ItemList'
import {Divider, Header, Loader} from "semantic-ui-react";

export default function Home({list}) {
  return (
    <div>
        <Head>
            <title>HOME | 해지마라고</title>
            <meta name="description" content="해지마라고의 홈입니다."/>
        </Head>
            <>
                <Header as="h3" style={{ paddingTop: 40 }}>
                    베스트 상품
                </Header>
                <Divider />
                <ItemList list={list.slice(0, 9)} />
                <Header as="h3" style={{ paddingTop: 40 }}>
                    신상품
                </Header>
                <Divider />
                <ItemList list={list.slice(9)} />
            </>
    </div>
  )
}

export async function getStaticProps() {
    // 브라우저 환경이 아님
    const apiUrl = process.env.apiUrl;
    const res = await axios.get(apiUrl);
    const data = res.data;

    return {
        props: {
            list: data,
            name: process.env.name
        },
    };
}
