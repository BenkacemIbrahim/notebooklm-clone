import { Lock, FileText, User, AudioWaveform } from "lucide-react"

export function PrivacySection() {
  return (
    <section className="px-32 py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-normal mb-8 text-balance text-gray-900">
          We value your privacy and do not use your personal data to train QUORRA.
        </h2>

        <p className="text-xl text-gray-500 mb-8 max-w-3xl mx-auto text-balance leading-relaxed">
          QUORRA does not use your personal data, including your source uploads, queries, and the responses from the
          model for training.
        </p>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 rounded-full border border-gray-200 opacity-30"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full border border-gray-200 opacity-50"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full border border-gray-200 opacity-70"></div>
            </div>

            <div className="w-96 h-96 rounded-full flex items-center justify-center relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Lock className="w-10 h-10 text-white" />
              </div>

              <div
                className="absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) translate(135.76px, -135.76px) translate(-50%, -50%)",
                }}
              >
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100">
                  <FileText className="w-5 h-5 text-blue-400" />
                </div>
              </div>

              <div
                className="absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) translate(0px, 160px) translate(-50%, -50%)",
                }}
              >
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100">
                  <User className="w-5 h-5 text-blue-400" />
                </div>
              </div>

              <div
                className="absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) translate(-128px, 0px) translate(-50%, -50%)",
                }}
              >
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100">
                  <AudioWaveform className="w-5 h-5 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
