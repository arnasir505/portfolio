'use client';
import { CSSProperties } from 'react';
import { motion } from 'motion/react';

const Card = ({
  style,
  text,
  image,
  containerRef,
}: {
  text?: string;
  style?: CSSProperties;
  image?: string;
  containerRef?: React.RefObject<HTMLDivElement | null>;
}) => {
  return image && !text ? (
    <motion.img
      src={image}
      alt={'card image'}
      className='absolute w-15 cursor-grab'
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
      style={style}
    />
  ) : (
    <motion.div
      className='absolute px-1 py-4 text-xl text-center rounded-full font-extralight w-[12rem] cursor-grab glass-btn'
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;
