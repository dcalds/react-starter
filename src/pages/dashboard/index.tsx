import React, { useEffect } from 'react';
import * as S from './styles';
import { Button, Layout } from '../../components';
import { GlobalContext } from '../../providers';

function Dashboard() {
  const { user } = React.useContext(GlobalContext);

  useEffect(() => {
    // setUser('Name');
  }, [])

  return (
    <Layout isFluid={false}>
      <S.Container>
        <S.Text>{user != null ? user.name : null}</S.Text>
        {/* <input type="text" onChange={e => setUser(e.target)}/> */}
        <Button text="Sair" link="/" />
      </S.Container>
    </Layout>
  );
}

export default Dashboard;
