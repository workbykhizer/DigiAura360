// 'use client';

// import Image from 'next/image';
// import { motion } from 'framer-motion';

// export default function HeroSection() {
//   return (
//     <section
//       id="hero"
//       className="relative bg-black text-white h-screen flex items-center justify-center overflow-hidden"
//     >
//       {/* Background Image */}
//       <motion.div
//         className="absolute inset-0 bg-cover bg-center"
//         initial={{ scale: 1.2, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1.5, ease: 'easeOut' }}
//       >
//         <Image
//           src="/images/hero-bg.jpg" // Use the correct path from the public folder
//           alt="Hero Background"
//           layout="fill" // Ensures the image spans the entire container
//           objectFit="cover" // Covers the area proportionally
//           className="opacity-70"
//         />
//       </motion.div>

//       {/* Content */}
//       <motion.div
//         className="relative z-10 text-center"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.5 }}
//       >
//         <motion.p
//           className="text-orange-500 uppercase text-lg tracking-wide"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.7 }}
//         >
//           Digital Marketing Agency
//         </motion.p>
//         <motion.h1
//           className="text-7xl font-bold mt-4"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 1 }}
//         >
//           DigiAura
//         </motion.h1>
//         <motion.p
//           className="mt-4 max-w-xl text-lg mx-auto text-gray-300"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 1.2 }}
//         >
//           Working with clients and communities, we deliver masterplans that
//           create vibrant new places and spaces, attract people, and encourage.
//         </motion.p>
//       </motion.div>

//       {/* Social Icons */}
//       <motion.div
//         className="absolute left-8 bottom-8 flex flex-col space-y-4"
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1, delay: 1.5 }}
//       >
//         <a href="#" className="text-gray-300 hover:text-orange-500">
//           <i className="fab fa-facebook-f"></i>
//         </a>
//         <a href="#" className="text-gray-300 hover:text-orange-500">
//           <i className="fab fa-twitter"></i>
//         </a>
//         <a href="#" className="text-gray-300 hover:text-orange-500">
//           <i className="fab fa-instagram"></i>
//         </a>
//       </motion.div>
//     </section>
//   );
// }














'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-black text-white h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        whileInView={{ scale: 1, opacity: 1 }}
        initial={{ scale: 1.2, opacity: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.5 }} // Trigger every time it comes into view
      >
        <Image
          src="/images/hero-bg.jpg" // Use the correct path from the public folder
          alt="Hero Background"
          layout="fill" // Ensures the image spans the entire container
          objectFit="cover" // Covers the area proportionally
          className="opacity-70"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: false, amount: 0.5 }} // Trigger every time it comes into view
      >
        <motion.p
          className="text-orange-500 uppercase text-lg tracking-wide"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Digital Marketing Agency
        </motion.p>
        <motion.h1
          className="text-7xl font-bold mt-4"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          DigiAura360°
        </motion.h1>
        <motion.p
          className="mt-4 max-w-xl text-lg mx-auto text-gray-300"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Working with clients and communities, we deliver masterplans that
          create vibrant new places and spaces, attract people, and encourage.
        </motion.p>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="absolute left-8 bottom-8 flex flex-col space-y-4"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1, delay: 1.5 }}
        viewport={{ once: false, amount: 0.5 }} // Trigger every time it comes into view
      >
        <a href="#" className="text-gray-300 hover:text-orange-500">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-300 hover:text-orange-500">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-300 hover:text-orange-500">
          <i className="fab fa-instagram"></i>
        </a>
      </motion.div>
    </section>
  );
}
