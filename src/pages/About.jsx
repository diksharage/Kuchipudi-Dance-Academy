import heroBg from "../assets/hero-bg.jpg";

function About() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Banner */}
      <div
        className="h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="bg-black/50 backdrop-blur-sm px-12 py-8 rounded-3xl text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
            About The Academy
          </h1>

          <p className="text-yellow-300 text-xl md:text-2xl">
            Preserving the Legacy of Kuchipudi Dance
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-[#FFF8E7] py-20 px-6 flex justify-center">
        <div className="w-full max-w-350 text-center">
          
          {/* Our Journey */}
          <div className="bg-white rounded-3xl shadow-lg p-12 mb-32">
            <h2 className="text-5xl font-bold text-[#7B1E3A] mb-8">
              Our Journey
            </h2>

            <div className="w-24 h-1 bg-[#7B1E3A] mx-auto mb-8 rounded-full"></div>

            <p className="text-xl text-gray-700 leading-10 text-center max-w-5xl mx-auto">
              The Kuchipudi Dance Academy is dedicated to preserving and
              promoting the rich heritage of Kuchipudi classical dance.
              Through disciplined training, cultural values and stage exposure,
              we help students become confident performers and ambassadors of
              Indian culture. Our mission is to inspire future generations
              while keeping the traditions of Kuchipudi alive through excellence
              in teaching and performance.
            </p>
          </div>

          {/* Mission Vision Achievement */}
          <div className="grid md:grid-cols-3 gap-12 mb-32 place-items-center">
            
            <div className="w-full bg-white rounded-3xl shadow-lg p-10 text-center min-h-[320px] flex flex-col justify-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <div className="text-6xl mb-6">🎯</div>

              <h3 className="text-3xl font-bold text-[#7B1E3A] mb-6">
                Mission
              </h3>

              <p className="text-gray-700 leading-8">
                To spread the beauty of Kuchipudi dance through quality
                education, discipline and cultural awareness.
              </p>
            </div>

            <div className="w-full bg-white rounded-3xl shadow-lg p-10 text-center min-h-[320px] flex flex-col justify-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <div className="text-6xl mb-6">👁️</div>

              <h3 className="text-3xl font-bold text-[#7B1E3A] mb-6">
                Vision
              </h3>

              <p className="text-gray-700 leading-8">
                To create world-class performers, teachers and cultural
                ambassadors who uphold tradition.
              </p>
            </div>

            <div className="w-full bg-white rounded-3xl shadow-lg p-10 text-center min-h-[320px] flex flex-col justify-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <div className="text-6xl mb-6">🏆</div>

              <h3 className="text-3xl font-bold text-[#7B1E3A] mb-6">
                Achievements
              </h3>

              <p className="text-gray-700 leading-8">
                500+ students trained, 50+ awards received and numerous
                national stage performances.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="w-full bg-[#7B1E3A] text-white rounded-3xl py-20 px-12">
            <h2 className="text-5xl font-bold text-center mb-16">
              Why Choose Us?
            </h2>

            <div className="grid md:grid-cols-3 gap-12 text-center">
              
              <div className="flex flex-col items-center">
                <div className="text-6xl mb-5">🎭</div>

                <h3 className="text-3xl font-semibold mb-4">
                  Expert Training
                </h3>

                <p className="leading-8 max-w-xs">
                  Learn from experienced Kuchipudi artists and dedicated mentors.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-6xl mb-5">🏅</div>

                <h3 className="text-3xl font-semibold mb-4">
                  Stage Exposure
                </h3>

                <p className="leading-8 max-w-xs">
                  Participate in performances, competitions and cultural events.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-6xl mb-5">📜</div>

                <h3 className="text-3xl font-semibold mb-4">
                  Certification
                </h3>

                <p className="leading-8 max-w-xs">
                  Receive certificates and recognition upon successful completion.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;