import * as S from './styles';
import { Layout, Button } from '../../components';

function Login() {
  return (
    <Layout isFluid={false}>
      <S.Container>
        <S.Text> Ir Para Dashboard </S.Text>
        <Button text="Entrar" link="/dashboard" />
      </S.Container>
    </Layout>
  );
}

export default Login;
