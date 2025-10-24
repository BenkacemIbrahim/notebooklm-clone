import { GraduationCap, Lightbulb, FileText } from "lucide-react"

export function UseCasesSection() {
  return (
    <section className="px-8 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-normal text-center mb-20">How people are using QUORRA</h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Power study */}
          <div className="text-left space-y-6">
            <div className="flex justify-start">
              <GraduationCap className="w-16 h-16 text-blue-500" />
            </div>
            <h3 className="text-2xl font-medium">Power study</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Upload lecture recordings, textbook chapters, and research papers. Ask QUORRA to explain complex concepts
              in simple terms, provide real-world examples, and reinforce your understanding.
            </p>
            <p className="text-base text-gray-500 italic">Learn faster and deeper.</p>
          </div>

          {/* Organize your thinking */}
          <div className="text-left space-y-6">
            <div className="flex justify-start">
              <FileText className="w-16 h-16 text-blue-500" />
            </div>
            <h3 className="text-2xl font-medium">Organize your thinking</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Upload your source material and let QUORRA create a polished presentation outline, complete with key
              talking points and supporting evidence.
            </p>
            <p className="text-base text-gray-500 italic">Present with confidence.</p>
          </div>

          {/* Spark new ideas */}
          <div className="text-left space-y-6">
            <div className="flex justify-start">
              <Lightbulb className="w-16 h-16 text-yellow-500" />
            </div>
            <h3 className="text-2xl font-medium">Spark new ideas</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Upload brainstorming notes, market research, and competitor research. Ask QUORRA to identify trends,
              generate new product ideas, and uncover hidden opportunities.
            </p>
            <p className="text-base text-gray-500 italic">Unlock your creative potential.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
