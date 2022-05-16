import React, { Fragment } from 'react';
import Bar from '../../components/common/Bar';
import BarBottom from '../../components/common/BarBottom';
import RegisterComponent from '../../components/common/Registercomponent'

export default function Register() {
    return (
        <Fragment>
            <Bar title="" />
            <RegisterComponent />
            <BarBottom />
        </Fragment>
    )
}