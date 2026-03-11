import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Heart, Moon, Sun } from 'lucide-react';

export default function Layout() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or system preference
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    // Apply dark mode class to html element
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-950 dark:via-gray-900 dark:to-primary-950 text-gray-800 dark:text-gray-100 transition-colors duration-300 flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/60 dark:bg-primary-950/70 border-b border-primary-100/60 dark:border-primary-900/50 backdrop-blur-md shadow-sm shadow-primary-100/40 dark:shadow-primary-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo area */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2 group">
                <Heart className="text-primary-500 group-hover:scale-110 transition-transform" size={28} fill="currentColor" />
                <span className="font-serif font-bold text-xl tracking-tight text-gray-900 dark:text-white">
                  Mensajes de Amor
                </span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden sm:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors">
                Inicio
              </Link>
              <Link to="/galeria" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors">
                Galería
              </Link>
            </div>

            {/* Right Side: Dark Mode Toggle */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${darkMode ? 'bg-gray-800' : 'bg-primary-100'
                  }`}
                aria-label="Toggle Dark Mode"
              >
                <span className="sr-only">Toggle dark mode</span>
                <span
                  className={`inline-flex items-center justify-center h-6 w-6 transform rounded-full bg-white shadow-sm transition-transform duration-300 ${darkMode ? 'translate-x-9' : 'translate-x-1'
                    }`}
                >
                  <Heart
                    size={14}
                    className={`transition-colors duration-300 ${darkMode ? 'text-gray-800' : 'text-primary-500'}`}
                    fill={darkMode ? "currentColor" : "currentColor"}
                  />
                </span>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Main Content padding-top to account for fixed navbar */}
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
    </div>
  );
}
