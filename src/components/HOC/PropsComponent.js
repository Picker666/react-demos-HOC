import React, { Component } from 'react';
import BaseComponent from '../BaseComponent';

const PropsComponent = (BaseComponent) => {

    class InnerComponent extends Component {
        render () {
            const props = {
                ...this.props,
                name: 'HOC Component'
            };

            return <BaseComponent {...props} />
        };
    };

    return InnerComponent;
}
export default PropsComponent(BaseComponent);