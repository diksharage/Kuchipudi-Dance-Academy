import CourseCard from "../components/CourseCard";

function Programs() {
  return (
    <div className="w-full min-h-screen bg-[#F8F1E7]">

      {/* Hero Section */}
      <div className="w-full bg-[#7A1631] text-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            Our Programs
          </h1>

          <p className="text-xl md:text-2xl text-gray-200">
            Learn the beautiful art of Kuchipudi from beginner to advanced level
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full flex justify-center py-12 px-6">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h2 className="text-5xl font-bold text-[#7A1631]">
                500+
              </h2>

              <p className="mt-3 text-lg text-gray-600">
                Students Trained
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h2 className="text-5xl font-bold text-[#7A1631]">
                15+
              </h2>

              <p className="mt-3 text-lg text-gray-600">
                Years Experience
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h2 className="text-5xl font-bold text-[#7A1631]">
                50+
              </h2>

              <p className="mt-3 text-lg text-gray-600">
                Stage Performances
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="w-full flex justify-center px-6 pb-20">
        <div className="w-full max-w-7xl">

          <h2 className="text-5xl md:text-6xl font-bold text-center text-[#7A1631] mb-16">
            Choose Your Journey
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">

            <CourseCard
              title="🌱 Beginner Kuchipudi"
              duration="3 Months"
              fee="₹3000"
            />

            <CourseCard
              title="🌟 Intermediate Kuchipudi"
              duration="6 Months"
              fee="₹5000"
            />

            <CourseCard
              title="👑 Advanced Kuchipudi"
              duration="1 Year"
              fee="₹8000"
            />

          </div>

        </div>
      </div>

    </div>
  );
}

export default Programs;