function StudentCard({
  name,
  level,
}) {
  return (
    <div
      className="
      bg-white
      rounded-xl
      shadow-lg
      p-6
      hover:scale-105
      transition
      "
    >

      <h2 className="text-2xl font-bold text-[#7B1E3A]">
        {name}
      </h2>

      <p className="mt-3 text-gray-700">
        Level: {level}
      </p>

    </div>
  );
}

export default StudentCard;