// import React from 'react';

const DeleteStaff = WrapperComponent => {
    return class Enhancer extends WrapperComponent {
        deleteStaff = (data) => {
            const { actions } = this.props;
            const { staffId } = data;
            actions.deleteAction({staffId});
        };

        render () {
            return super.render();
        };
    };
};

export default DeleteStaff;