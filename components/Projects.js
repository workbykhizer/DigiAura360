// 'use client';
// import { useState } from 'react';

// export default function Projects() {
//   const projects = [
//     {
//       id: 1,
//       title: 'Project One',
//       description: 'A brief description of Project One.',
//       image: '/images/project1.jpg', // Replace with the actual path
//     },
//     {
//       id: 2,
//       title: 'Project Two',
//       description: 'A brief description of Project Two.',
//       image: '/images/project2.jpg', // Replace with the actual path
//     },
//     {
//       id: 3,
//       title: 'Project Three',
//       description: 'A brief description of Project Three.',
//       image: '/images/project3.jpg', // Replace with the actual path
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <section id="projects" className="relative h-[100vh] bg-black text-white">
//     <h1 className='w-full text-4xl font-bold pb-10 -mt-20 text-center'>Our Projects</h1>
//       {/* Slider Container */}
//       <div className="w-full h-full relative overflow-hidden">
//         {/* Slides */}
//         {projects.map((project, index) => (
//           <div
//             key={project.id}
//             className={`absolute inset-0 transition-transform duration-500 ${
//               index === currentSlide ? 'translate-x-0' : 'translate-x-full'
//             } ${index < currentSlide ? '-translate-x-full' : ''}`}
//             style={{ zIndex: index === currentSlide ? 1 : 0 }}
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
//               <h3 className="text-4xl font-bold">{project.title}</h3>
//               <p className="text-gray-300 mt-2">{project.description}</p>
//               <a
//                 href="#"
//                 className="mt-4 bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600 transition"
//               >
//                 View Details
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Left Arrow */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 z-10 transform -translate-y-1/2 text-gray-500 text-6xl p-4 rounded-full"
//       >
//         ❮
//       </button>

//       {/* Right Arrow */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 z-10 transform -translate-y-1/2 text-gray-500 text-6xl p-4 rounded-full"
//       >
//         ❯
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex z-10 space-x-2">
//         {projects.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-4 h-4 rounded-full ${
//               index === currentSlide ? 'bg-orange-500' : 'bg-gray-400'
//             }`}
//           ></button>
//         ))}
//       </div>
//     </section>
//   );
// }
















'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of Project One.',
      image: '/images/project1.jpg', // Replace with the actual path
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A brief description of Project Two.',
      image: '/images/project2.jpg', // Replace with the actual path
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A brief description of Project Three.',
      image: '/images/project3.jpg', // Replace with the actual path
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <motion.section
      id="projects"
      className="relative h-[100vh] bg-black text-white"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.h1
        className="w-full text-4xl font-bold pb-10 pt-10 -mt-10 text-center"
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Our Projects
      </motion.h1>

      {/* Slider Container */}
      <div className="w-full h-full relative overflow-hidden">
        <AnimatePresence>
          {projects.map((project, index) =>
            index === currentSlide ? (
              <motion.div
                key={project.id}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center"
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <motion.h3
                    className="text-4xl font-bold"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-300 mt-2"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  >
                    {project.description}
                  </motion.p>
                  <motion.a
                    href="#"
                    className="mt-4 bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600 transition"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                  >
                    View Details
                  </motion.a>
                </motion.div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-10 transform -translate-y-1/2 text-gray-500 text-6xl p-4 rounded-full"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-10 transform -translate-y-1/2 text-gray-500 text-6xl p-4 rounded-full"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex z-10 space-x-2">
        {projects.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentSlide ? 'bg-orange-500' : 'bg-gray-400'
            }`}
            whileHover={{ scale: 1.2 }}
          ></motion.button>
        ))}
      </div>
    </motion.section>
  );
}
