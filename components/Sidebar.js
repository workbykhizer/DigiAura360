'use client'
export default function Sidebar() {
    return (
      <div className="fixed top-0 left-0 h-full flex flex-col items-center justify-center space-y-6 z-10">
        {/* Top Line */}
        <div className="w-px h-20 bg-gray-500"></div>
  
        {/* Social Media Icons */}
        <div className="space-y-4">
          <a
            href="#"
            className="text-white hover:text-red-500 transition duration-300"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="text-white hover:text-red-500 transition duration-300"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-white hover:text-red-500 transition duration-300"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
  
        {/* Bottom Line */}
        <div className="w-px h-20 bg-gray-500"></div>
      </div>
    );
  }
  