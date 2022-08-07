import * as S from './styles';

interface ILayout {
    isFluid: boolean;
    children: React.ReactNode
}

export function Layout({ isFluid, children }: ILayout) {
    return (
        <S.Container className={isFluid ? '' : 'contain'}>
            {children}
        </S.Container>
    );
}
