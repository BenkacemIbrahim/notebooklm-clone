import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 bg-white px-6 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <a href="#top" className="flex items-center">
          <Image
            src="/quorra-logo.png"
            alt="QUORRA logo"
            width={100}
            height={32}
            className="h-8 w-auto"
          />
        </a>

        <div className="flex items-center gap-5 text-sm text-gray-600">
          <a href="#privacy" className="hover:text-black">
            Privacy
          </a>
          <a href="#features" className="hover:text-black">
            Features
          </a>
          <span>© {currentYear} QUORRA</span>
        </div>
      </div>
    </footer>
  )
}
