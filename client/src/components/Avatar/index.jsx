import React from "react";
import { Container, AvatarImg } from "./style";

interface IProps {
  src?: string;
  size?: string;
}

const Avatar: React.FC<IProps> = ({ src, size }) => {
  return (
    <Container className={size}>
      <AvatarImg src={src} />
    </Container>
  );
};

export default Avatar;
