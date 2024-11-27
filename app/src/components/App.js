import React, { Component } from 'react';
import ListItem from './ListItem';
import PackingList from '../PackingList';

class App extends Component {

    render() {
        return (
            <div>
                <PackingList></PackingList>
            </div>
        )
    }
}

export default App;