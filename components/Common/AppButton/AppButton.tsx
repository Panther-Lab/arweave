import Link from 'next/link';
import { LinkTo } from './styles';

const AppButton = ({ padding }: { padding: string }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href="/game"
    >
      Get Started
    </LinkTo>
  );
};

export default AppButton;