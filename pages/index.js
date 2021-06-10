import Head from 'next/head'
import axios from "axios";
import { useState, useEffect } from 'react';

import ItemList from '../src/component/ItemList'
import {Divider, Header} from "semantic-ui-react";

export default function Home() {
    const [list, setList] = useState([]);
    const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
    const getData = () => {
        axios.get(API_URL).then(res => {
            if (res.status === 200) {
                setList(res.data);
            }
        })
    };

    useEffect(() => {
        getData();
    }, [])

  return (
    <div>
        <title>HOME | 해지마라고</title>
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
    </div>
  )
}
