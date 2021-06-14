import axios from "axios";
import {useRouter} from "next/router";
import { useEffect, useState } from 'react';
import {Button} from "semantic-ui-react";

export default function Admin() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(false);

    const logout = () => {
            axios.get('/api/logout').then(res => {
                if (res.status === 200) {
                    router.push('/login')
                }
            })
    }

    const checkLogin = () => {
        axios.get('/api/isLogin').then(res => {
            if (res.status === 200 && res.data.name) {
                //login
                setIsLogin(true);
            } else {
                router.push('/login')
            }
        })
    }
    useEffect(()=> {
        checkLogin();
    }, [])
    return (
        <>admin{isLogin && <Button color="black" onClick={logout}>Logout</Button>}</>
    )
}
