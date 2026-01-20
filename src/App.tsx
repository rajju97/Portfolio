import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleDownloadPDF = () => {
    // Using the PDF from your resume
    const pdfUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Rajveer Singh</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FaDownload /> Resume
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-24 pb-8">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Full Stack Developer</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about creating efficient, scalable, and user-friendly web applications
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">About Me</h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Full Stack Developer with expertise in building modern web applications.
              Skilled in React, Node.js, and cloud technologies. Focused on creating
              efficient, scalable, and user-friendly solutions.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Agri E-Commerce</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A comprehensive e-commerce platform for agricultural products.
              </p>
              <a
                href="https://github.com/rajju97/Agri-E-Commerce-Frontend-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Details
              </a>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Company Name • 2020 - Present</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Developed and maintained web applications using React and Node.js
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Implemented responsive designs and improved application performance
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Collaborated with cross-functional teams to deliver high-quality solutions
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Parking Management System</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">A React Application for Parking Management</p>
              <a
                href="https://github.com/rajju97/Parklane"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FaGithub /> View Details
              </a>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-4 text-lg">Frontend</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>React & React Native</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Next.js</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-4 text-lg">Backend</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-4 text-lg">Tools & Technologies</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>Git</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <a
                href="https://github.com/rajju97"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/rajveer-singh-588a011a5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
            <a
              href="mailto:your.email@example.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              your.email@example.com
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;