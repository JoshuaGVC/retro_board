import React, { FC } from 'react';
import { Wrapper } from './WrapperPrincipal.styled';
import { IWrapperPrincipal } from './WrapperPrincipal.d';

const WrapperPrincipal: FC<IWrapperPrincipal> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default WrapperPrincipal;
