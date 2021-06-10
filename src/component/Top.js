import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
    return (
        <div>
            <div style={{ display: "flex", paddingTop: 20 }}>
                <div style={{ flex: "100px 0 0"}}>
                    <img src={'/images/logo.png'} alt='logo' style={{ display: "black", width: 80}}/>
                </div>
                <Header as="h1">해지마라고</Header>
            </div>
            <Gnb />
        </div>
    );
};
