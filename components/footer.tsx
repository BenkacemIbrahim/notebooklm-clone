import Image from "next/image"

export function Footer() {
  return (
    <footer className="px-6 py-8 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <Image src="/quorra-logo.png" alt="QUORRA" width={100} height={32} className="h-8 w-auto" />
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-black">
            Privacy & Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
