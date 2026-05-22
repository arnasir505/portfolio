import Image from 'next/image';
import { OrbitingCircles } from './OrbitingCircles';

export function Frameworks() {
  const skills = [
    '/assets/logos/Ant Design.png',
    '/assets/logos/Material UI.png',
    '/assets/logos/css-3.png',
    '/assets/logos/Node.js.png',
    '/assets/logos/Figma.png',
    '/assets/logos/GitHub.png',
    '/assets/logos/html-5.png',
    '/assets/logos/js.png',
    '/assets/logos/MongoDB.png',
    '/assets/logos/Next.js.png',
    '/assets/logos/Redux.png',
    '/assets/logos/Python.png',
    '/assets/logos/React.png',
    '/assets/logos/PostgresSQL.png',
    '/assets/logos/Tailwind CSS.png',
    '/assets/logos/typescript.png',
    '/assets/logos/VS Code.png',
    '/assets/logos/Docker.png',
  ];
  return (
    <div className='relative flex h-[15rem] w-full flex-col items-center justify-center'>
      <OrbitingCircles iconSize={40}>
        {skills.map((src, index) => (
          <Icon key={index} src={src} size={40} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((src, index) => (
          <Icon key={index} src={src} size={30} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, size }: { src: string; size: number }) => (
  <Image
    src={src}
    alt='Framework icon'
    className='rounded-sm duration-200 hover:scale-110'
    width={size}
    height={size}
  />
);
