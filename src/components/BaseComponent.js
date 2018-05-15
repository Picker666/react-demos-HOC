import React, {Component} from 'react';

class BaseComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            baseName: 'base component'
        };
    };

    render () {
        const { name, describe } = this.props;
        const { baseName } = this.state;
        return <div>
            <h3>{`${name} + ${baseName}`}</h3>
            <h4>{describe}</h4>
        </div>
    };
};

export default BaseComponent;