import React, {Fragment} from 'react';
import Bar from '../../components/common/Bar';
import LoginRegisterComponent from '../../components/common/LoginRegisterComponent';
import loginregisterConst from '../../const/loginregisterConst';

export default function Register() {
  return (
    <Fragment>
      <Bar />
      <LoginRegisterComponent type={loginregisterConst.type2} />
    </Fragment>
  );
}
