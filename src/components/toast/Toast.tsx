import S from './Toast.styled';

type ToastProps = {
  isVisible: boolean;
  children: string;
};

const Toast = ({ isVisible, children }: ToastProps) => {
  return (
    <S.ToastWrapper $isVisible={isVisible}>
      <S.ToastMessage>{children}</S.ToastMessage>
    </S.ToastWrapper>
  );
};

export default Toast;
