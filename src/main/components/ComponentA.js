import React, { Component } from 'react'
import { withGlobalState } from '../../providers';

class ComponentA extends Component {
    render() {
        const {loading, startLoading, stopLoading} = this.props;
        return (
            <div>
                <p>{ loading ? 'Loading' : 'nop' }</p>
                <button onClick = { ()=> loading? stopLoading() : startLoading() }>Toggle</button>
            </div>
        )
    }
}

ComponentA.propTypes = {
    
};

export default withGlobalState(ComponentA);
