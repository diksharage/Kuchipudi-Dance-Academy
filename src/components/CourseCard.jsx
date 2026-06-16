function CourseCard({ title, duration, fee }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 hover:shadow-2xl transition duration-300">

      <h2 className="text-3xl font-bold text-[#7A1631] mb-4">
        {title}
      </h2>

      <p className="text-lg mb-2">
        ⏳ Duration: {duration}
      </p>

      <p className="text-xl font-bold text-yellow-600 mb-4">
        💰 Fee: {fee}
      </p>

      <ul className="space-y-2 text-gray-700">
        <li>✔ Professional Training</li>
        <li>✔ Stage Performance</li>
        <li>✔ Certificate Provided</li>
        <li>✔ Cultural Events Participation</li>
      </ul>

      <button className="mt-6 w-full bg-[#7A1631] text-white py-3 rounded-lg hover:bg-[#5c1025]">
        Enroll Now
      </button>

    </div>
  );
}

export default CourseCard;