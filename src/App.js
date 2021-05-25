import Navbar from './components/Navbar';
import useDarkMode from './hooks/useDarkMode';

export default function App() {
  useDarkMode();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 transition duration-300">
      <Navbar />
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 text-center">
        Dark Mode en React con Tailwind CSS
      </h1>
    </div>
  );
}
