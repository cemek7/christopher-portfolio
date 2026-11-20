export default function Footer() {
  return (
    <footer className="bg-[#13221b] text-[#c1cec4]">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p>© {new Date().getFullYear()} Christopher Ozougwu · TechClave</p>
        <a href="#home" className="text-[#a5e0bd] transition-colors hover:text-white">Back to top ↑</a>
      </div>
    </footer>
  )
}
