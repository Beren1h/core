import React, { Component, PropTypes } from 'react';
import index from '../../Client/application/components/index.js';

import { doNothing } from '../../Client/application/actions/eventAction.js';

class Home extends Component {
    componentWillMount() {
        // index._store.dispatch(doNothing());
    }
    fireAction(){
        index._store.dispatch(doNothing());
    }
    render() {
        return (
            <index._provider store={index._store}>
                <div>
                    <h1>wtf</h1>
                    <button onClick={this.fireAction}>load tweets</button>
                </div>
            </index._provider>
        );
    }
}

export default Home;
