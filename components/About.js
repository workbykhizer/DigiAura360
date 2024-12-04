// export default function About() {
//     return (
//       <section id="about" className="flex flex-col items-center justify-center py-16 h-[100vh] bg-black text-white">
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Left Section: Years of Experience */}
//           <div className="flex flex-col items-center justify-center">
//             <div className="text-center border border-gray-400 py-24 px-24 border-r-0">
//               <h1 className="text-9xl font-bold">
//                 9<span className="text-orange-500">.</span>
//               </h1>
//               <p className="text-lg mt-4">
//                 Years <br />
//                 Experience <br />
//                 Working
//               </p>
//             </div>
//           </div>
  
//           {/* Right Section: Experience and Skills */}
//           <div>
//             <h2 className="text-4xl font-bold mb-4">Great Experience</h2>
//             <p className="text-gray-400 mb-6">
//               Fill appear won't may make moveth signs. Fourth. Good own. Green you're moveth us, lesser.
//             </p>
  
//             {/* Skills List */}
//             <div className="space-y-4">
//               {/* Skill 1: Web Design */}
//               <div>
//                 <div className="flex justify-between mb-1">
//                   <span className="text-sm">Web Design</span>
//                   <span className="text-sm">70%</span>
//                 </div>
//                 <div className="w-full bg-gray-700 rounded-full h-2">
//                   <div className="bg-orange-500 h-2 rounded-full" style={{ width: '70%' }}></div>
//                 </div>
//               </div>
  
//               {/* Skill 2: Figma */}
//               <div>
//                 <div className="flex justify-between mb-1">
//                   <span className="text-sm">Figma</span>
//                   <span className="text-sm">85%</span>
//                 </div>
//                 <div className="w-full bg-gray-700 rounded-full h-2">
//                   <div className="bg-orange-500 h-2 rounded-full" style={{ width: '85%' }}></div>
//                 </div>
//               </div>
  
//               {/* Skill 3: WordPress */}
//               <div>
//                 <div className="flex justify-between mb-1">
//                   <span className="text-sm">WordPress</span>
//                   <span className="text-sm">90%</span>
//                 </div>
//                 <div className="w-full bg-gray-700 rounded-full h-2">
//                   <div className="bg-orange-500 h-2 rounded-full" style={{ width: '90%' }}></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <div className="w-full h-[0.1px] mt-52 bg-gray-900"></div> */}
//       </section>
//     );
//   }
  

















'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center py-16 h-[100vh] bg-black text-white"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Years of Experience */}
        <motion.div
          className="flex flex-col items-center justify-center"
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }} // Ensures it triggers each time it scrolls into view
        >
          <div className="text-center border border-gray-400 py-24 px-24 border-r-0 shadow-lg hover:scale-105 transition-transform duration-300">
            <motion.h1
              className="text-9xl font-bold"
              whileInView={{ scale: 1 }}
              initial={{ scale: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              9<span className="text-orange-500">.</span>
            </motion.h1>
            <p className="text-lg mt-4">
              Years <br />
              Experience <br />
              Working
            </p>
          </div>
        </motion.div>

        {/* Right Section: Experience and Skills */}
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">Great Experience</h2>
          <motion.p
            className="text-gray-400 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Fill appear won't may make moveth signs. Fourth. Good own. Green
            you're moveth us, lesser.
          </motion.p>

          {/* Skills List */}
          <div className="space-y-4">
            {/* Skill 1: Web Design */}
            <motion.div
              whileInView={{ opacity: 1, width: '70%' }}
              initial={{ opacity: 0, width: '0%' }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <div className="flex justify-between mb-1">
                <span className="text-sm">Web Design</span>
                <span className="text-sm">70%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-orange-500 h-2 rounded-full"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </motion.div>

            {/* Skill 2: Figma */}
            <motion.div
              whileInView={{ opacity: 1, width: '85%' }}
              initial={{ opacity: 0, width: '0%' }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <div className="flex justify-between mb-1">
                <span className="text-sm">Figma</span>
                <span className="text-sm">85%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-orange-500 h-2 rounded-full"
                  style={{ width: '85%' }}
                ></div>
              </div>
            </motion.div>

            {/* Skill 3: WordPress */}
            <motion.div
              whileInView={{ opacity: 1, width: '90%' }}
              initial={{ opacity: 0, width: '0%' }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <div className="flex justify-between mb-1">
                <span className="text-sm">WordPress</span>
                <span className="text-sm">90%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-orange-500 h-2 rounded-full"
                  style={{ width: '90%' }}
                ></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
