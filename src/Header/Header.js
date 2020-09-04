import React from 'react';

import styled from "styled-components"

function App() {
    return (
        <Div>
            <Header>
                <h2>BLOGS</h2>
            </Header>
        </Div>
    );
}

const Div = styled.div`
    min-width: 1160px;
    position: relative;
`

const Header = styled.div`
    background-color: black;
    width: 100%;
    height: 65px;
    padding-top: 20px;
    h2 {
        color: white;
        text-align: center;
        font-size: 30px;
    }
`

export default App;
