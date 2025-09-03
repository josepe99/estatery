export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-10 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Estatery. All rights reserved.</p>
        <nav className="flex items-center gap-6">
          <a href="#" className="hover:text-gray-700">
            Privacy
          </a>
          <a href="#" className="hover:text-gray-700">
            Terms
          </a>
          <a href="#" className="hover:text-gray-700">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
