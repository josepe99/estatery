export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-gray-500 sm:flex-row sm:px-6">
        <p className="text-center sm:text-left">© {new Date().getFullYear()} Estatery. All rights reserved.</p>
        <nav className="flex items-center gap-8">
          <a href="#" className="hover:text-gray-700 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-gray-700 transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-gray-700 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
