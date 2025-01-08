import { ReactNode, createContext, useContext } from 'react';

import * as S from './Chip.styled';

interface ChipContextType {
  stroke?: boolean;
  size?: 'small' | 'medium' | 'large';
  active?: boolean;
  onClick?: () => void;
}

interface ChipPropType {
  stroke?: boolean;
  size?: 'small' | 'medium' | 'large';
  active?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

const ChipContext = createContext<ChipContextType | null>(null);

const Chip = ({ stroke, size, active, children, onClick }: ChipPropType) => {
  return <ChipContext.Provider value={{ stroke, size, active, onClick }}>{children}</ChipContext.Provider>;
};

const RoundContainer = ({ children }: Omit<ChipPropType, 'stroke' | 'size' | 'active'>) => {
  const context = useContext(ChipContext);
  if (!context) throw new Error('Chip 컴포넌트 안에서 사용해주세요');

  return (
    <S.ChipRoundContainer
      onClick={context.onClick}
      $stroke={context.stroke}
      $size={context.size}
      $active={context.active}
    >
      {children}
    </S.ChipRoundContainer>
  );
};

const RectContainer = ({ children }: Omit<ChipPropType, 'stroke' | 'size' | 'active'>) => {
  const context = useContext(ChipContext);
  if (!context) throw new Error('Chip 컴포넌트 안에서 사용해주세요');

  return (
    <S.ChipRectContainer
      onClick={context.onClick}
      $stroke={context.stroke}
      $size={context.size}
      $active={context.active}
    >
      {children}
    </S.ChipRectContainer>
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

Chip.RoundContainer = RoundContainer;
Chip.RectContainer = RectContainer;
Chip.Icon = Icon;
Chip.Label = Label;

export default Chip;
