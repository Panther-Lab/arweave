import Link from 'next/link';
import { LinkTo } from './styles';

const AppButton = ({ padding }: { padding: string }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href="/"
    >
      Get Started
    </LinkTo>
  );
};

export default AppButton;