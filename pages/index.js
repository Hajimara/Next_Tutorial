import Head from 'next/head'
import axios from "axios";
import { useState, useEffect } from 'react';

import ItemList from '../src/component/ItemList'
import {Divider, Header, Loader} from "semantic-ui-react";

export default function Home() {
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const getData = () => {
        axios.get(API_URL).then(res => {
            if (res.status === 200) {
                setList(res.data);
                setIsLoading(false);
            }
        })
    };

    useEffect(() => {
        getData();
    }, [])

  return (
    <div>
        <Head>
            <title>HOME | 해지마라고</title>
            <meta name="description" content="해지마라고의 홈입니다."/>
        </Head>
        {isLoading && (
            <div style={{ padding: "300px 0"}}>
            <Loader inline="centered" active>
                Loading
            </Loader>
            </div>
        )}
        {!isLoading && (
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
        )}
    </div>
  )
}
