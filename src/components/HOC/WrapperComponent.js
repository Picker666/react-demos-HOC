import React, { Component } from 'react';
import BaseComponent from '../BaseComponent';

const WrapperComponent = (BaseComponent) => {

    class InnerComponent extends Component {
        render () {
            const props = {
                ...this.props,
                name: 'HOC Component'
            };

            return <div style={{backgroundColor: 'orange'}}>
                    <BaseComponent {...props} />
                </div>
        };
    };

    return InnerComponent;
}
export default WrapperComponent(BaseComponent);