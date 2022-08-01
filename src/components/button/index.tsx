import * as S from "./styles";

interface IButton {
  text: string;
  link?: string;
}

export const Button: React.FC<IButton> = ({ text, link }) => {
  return <S.Button href={link}> {text} </S.Button>;
};
