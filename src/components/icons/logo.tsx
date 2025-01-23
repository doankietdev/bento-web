import Image from 'next/image';

//----------------------------------------------------------------------

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src={'/img/logo.png'}
      width={200}
      height={200}
      alt="logo"
      className={`w-[90px] h[90px] ${className}`}
    />
  );
}
