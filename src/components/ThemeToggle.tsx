import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const syncTheme = () => {
      const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      setTheme(current);
    };

    syncTheme();
    setMounted(true);

    // Listen to custom event so that multiple toggles (desktop and mobile) stay in sync
    window.addEventListener('theme-changed', syncTheme);
    return () => window.removeEventListener('theme-changed', syncTheme);
  }, []);

  const toggleTheme = () => {
    // Read directly from DOM to avoid state mismatches between components
    const isDark = document.documentElement.classList.contains('dark');
    const next = isDark ? 'light' : 'dark';
    
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(next);
    localStorage.setItem('theme', next);
    
    // Dispatch event to update state in all other ThemeToggle instances
    window.dispatchEvent(new Event('theme-changed'));
  };

  if (!mounted) {
    return <div className="relative w-14 h-7 rounded-full bg-secondary border border-border flex items-center px-1" aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-secondary border border-border flex items-center px-1 transition-colors duration-300 hover:border-primary/40"
      aria-label="Toggle theme"
    >
      <span
        className={`absolute w-5 h-5 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 ${
          theme === 'light' ? 'translate-x-0' : 'translate-x-7'
        }`}
      >
        {theme === 'light' ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
        )}
      </span>
    </button>
  );
}
