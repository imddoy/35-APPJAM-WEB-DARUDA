import { ReactNode, createContext, useContext } from 'react';

import * as S from './Chip.styled';

interface ChipContextType {
  onClick?: () => void;
}

interface ChipPropType {
  rounded: 'round' | 'rect';
  stroke?: boolean;
  size?: 'small' | 'large';
  children: ReactNode;
  onClick?: () => void;
}

const ChipContext = createContext<ChipContextType | null>(null);

const Chip = ({ rounded, stroke, children, onClick }: ChipPropType) => {
  return (
    <ChipContext.Provider value={{ onClick }}>
      <S.ChipContainer onClick={onClick} $rounded={rounded} $stroke={stroke}>
        {children}
      </S.ChipContainer>
    </ChipContext.Provider>
  );
};

const Icon = ({ src, alt }: { src: string; alt?: string }) => {
  const context = useContext(ChipContext);
  if (!context) throw new Error('Chip 컴포넌트 안에서 사용해주세요');

  return <S.ChipIcon src={src} alt={alt} />;
};

const Label = ({ children }: { children: ReactNode }) => {
  const context = useContext(ChipContext);
  if (!context) throw new Error('Chip 컵포넌트 안에서 사용해주세요');

  return <S.ChipLabel>{children}</S.ChipLabel>;
};

Chip.Icon = Icon;
Chip.Label = Label;

export default Chip;
