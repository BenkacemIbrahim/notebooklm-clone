import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="px-8 py-20 md:py-32 text-center max-w-6xl mx-auto">
      <h1 className="text-5xl md:text-8xl font-normal mb-8 text-balance font-google-sans">
        Understand{" "}
        <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
          Anything
        </span>
      </h1>

      <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto text-balance font-helvetica">
        Your research and thinking partner, grounded in the information you trust, built with the latest Gemini models.
      </p>

      <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-12 py-4 text-lg font-medium">
        Try QUORRA
      </Button>

      <div className="mt-20">
        <h2 className="text-3xl md:text-4xl font-normal text-black mb-16 font-google-sans">
          Your AI-Powered Research Partner
        </h2>
      </div>
    </section>
  )
}
