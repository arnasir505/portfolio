import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = 'ariet.nasirdinov505@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <motion.button
      className='relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden'
      onClick={handleCopy}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
    >
      <AnimatePresence mode='wait'>
        {copied ? (
          <motion.p
            key={'copied'}
            className='flex items-center justify-center gap-2'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, ease: 'easeInOut' }}
            exit={{ opacity: 0, y: -10 }}
          >
            <Image
              src={'/assets/copy-done.svg'}
              alt='Copied to Clipboard'
              height={20}
              width={20}
            />
            Copied!
          </motion.p>
        ) : (
          <motion.p
            key={'copy'}
            className='flex items-center justify-center gap-2'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            exit={{ opacity: 0 }}
          >
            <Image
              src={'/assets/copy.svg'}
              alt='Copy Email Address'
              width={20}
              height={20}
            />
            Copy Email Address
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
