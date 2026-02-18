import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <a href="#top" className="flex items-center">
          <Image
            src="/quorra-logo.png"
            alt="QUORRA logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-black">
              Features
            </a>
            <a href="#privacy" className="text-sm font-medium text-gray-700 hover:text-black">
              Privacy
            </a>
            <a href="#use-cases" className="text-sm font-medium text-gray-700 hover:text-black">
              Use Cases
            </a>
            <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-black">
              Reviews
            </a>
          </nav>

          <Button asChild className="rounded-full bg-black px-6 text-white hover:bg-gray-800">
            <a href="#hero">Try QUORRA</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
