import * as S from './styles';
import { Button, Layout } from '../../components';
import './styles';

function Dashboard() {
  return (
    <Layout isFluid={false}>
      <S.Container>
        <S.Text> Sair </S.Text>
        <Button text="Sair" link="/" />
      </S.Container>
    </Layout>
  );
}

export default Dashboard;
