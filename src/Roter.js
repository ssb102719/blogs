import React from 'react';
import Main from './Page/Main'
import Header from './Header/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Main} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
