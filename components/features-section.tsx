import Image from "next/image"
import { Upload, Zap, Sparkles, Volume2 } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
      <div className="grid gap-20">
        {/* Upload your sources */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Upload className="w-8 h-8" />
              <h3 className="text-2xl font-medium font-google-sans">Upload your sources</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed font-helvetica">
              Upload PDFs, websites, YouTube videos, audio files, Google Docs, or Google Slides, and
              QUORRA will summarize them and make meaningful connections between topics using
              multimodal AI understanding.
            </p>
          </div>
          <div className="bg-gray-900 rounded-2xl overflow-hidden">
            <video className="w-full h-auto object-cover" autoPlay loop muted playsInline>
              <source
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/upload_your_sources-bK0T3IqFaqICYcQvaCskWNkpgeGF22.mp4"
                type="video/mp4"
              />
              <span className="text-white">Your browser does not support the video tag.</span>
            </video>
          </div>
        </div>

        {/* Instant insights */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Zap className="w-8 h-8" />
              <h3 className="text-2xl font-medium font-google-sans">Instant insights</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed font-helvetica">
              With all of your sources in place, QUORRA gets to work and becomes a personalized AI
              expert in the information that matters most to you.
            </p>
          </div>
          <div className="bg-gray-900 rounded-2xl overflow-hidden">
            <Image
              src="/news-collage.png"
              alt="QUORRA interface showing generated study insights"
              width={1200}
              height={675}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* See the source */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Sparkles className="w-8 h-8" />
              <h3 className="text-2xl font-medium font-google-sans">
                See the source, not just the answer
              </h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed font-helvetica">
              Gain confidence in every response because QUORRA provides clear citations for its
              work, showing you the exact quotes from your sources.
            </p>
          </div>
          <div className="bg-gray-900 rounded-2xl overflow-hidden">
            <video className="w-full h-auto object-cover" autoPlay loop muted playsInline>
              <source
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/see_the_source_not_just_the_answer-MxgotraXspbbKQfgbekvDcRF7W8Jsx.mp4"
                type="video/mp4"
              />
              <span className="text-white">Your browser does not support the video tag.</span>
            </video>
          </div>
        </div>

        {/* Listen and learn */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Volume2 className="w-8 h-8" />
              <h3 className="text-2xl font-medium font-google-sans">Listen and learn on the go</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed font-helvetica">
              Our new Audio Overview feature can turn your sources into engaging &ldquo;Deep
              Dive&rdquo; discussions with one click.
            </p>
          </div>
          <div className="bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 rounded-2xl overflow-hidden">
            <video className="w-full h-auto object-cover" autoPlay loop muted playsInline>
              <source
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/listen_and_learn_on_the_go-IwrRDvNsvZiQwDAzL0i4czv9ahzdgK.mp4"
                type="video/mp4"
              />
              <span className="text-white">Your browser does not support the video tag.</span>
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
