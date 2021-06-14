import Item from "../../src/component/Item";
import axios from "axios";
import Head from "next/head";

const Post = ({ item, name }) => {
    return (
        <>
            <Head>
                <title>{item.name}</title>
                <meta name="description" content={item.description}></meta>
            </Head>
            {/*{name} 환경입니다.*/}
            <Item item={item} />
        </>
    )
};

export default Post;

export async function getServerSideProps(context) {
    // 브라우저 환경이 아님
    const id = context.params.id;
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await axios.get(apiUrl);
    const data = res.data;

    return {
        props: {
            item: data,
            name: process.env.name
        },
    };
}

/*
    Next js 모든 페이지를 사전 렌더링 (Pre-rendering)
    더 좋은 퍼포먼스
    검색엔진최적화 (SEO)

    1. 정적 생성
    2. Server Side Rendering (SSR, Dynamix Rendering)

    차이점은 언제 html 파일을 생성하는가

    [정적 생성]
    - 프로젝트가 빌드하는 시점에 html파일들이 생성
    - 모든 요청에 재사용
    - 퍼포먼스 이유로, 넥스트 js는 정적 html 파일들이 생성
    - getStaticProps / getStaticPaths

    [서버사이드 렌더링]은 매 요청마다 html을 생성
    - 항상 최신 상태 유지
    - getServerSideProps
 */
