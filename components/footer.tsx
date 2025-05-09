import { HeartIcon } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">&copy; {currentYear} Christopher Ozougwu. All rights reserved.</p>
          </div>

          <div className="flex items-center">
            <p className="text-muted-foreground flex items-center">
              Made with <HeartIcon className="h-4 w-4 mx-1 text-red-500" /> using Next.js & React
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

