import React, {Fragment} from 'react';
import Bar from '../../components/common/Bar';
import LoginRegisterComponent from '../../components/common/LoginRegisterComponent';
import loginregisterConst from '../../const/loginregisterConst';

export default function Login() {
  return (
    <Fragment>
      <Bar />
      <LoginRegisterComponent type={loginregisterConst.type1} />
    </Fragment>
  );
}
