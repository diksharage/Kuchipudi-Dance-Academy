import { useEffect, useState } from "react";
import StudentCard from "../components/StudentCard";

function StudentHub() {
  const [students, setStudents] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.slice(0, 6));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    async function getWorkshops() {
      try {
        const response = await fetch(
          "https://dummyjson.com/carts"
        );

        const data = await response.json();

        setWorkshops(data.carts.slice(0, 3));
      } catch (error) {
        console.log(error);
      }
    }

    getWorkshops();
  }, []);

  const addStudent = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const level = e.target.level.value;

    const newStudent = {
      id: Date.now(),
      name,
      level,
    };

    setStudents([...students, newStudent]);

    e.target.reset();
  };

  return (
  <div className="bg-[#FFF8E7] min-h-screen py-16">
    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-[#7B1E3A] mb-4">
          Student Hub
        </h1>

        <p className="text-gray-600 text-lg md:text-xl">
          Manage Students, Practice Sessions & Workshops
        </p>
      </div>

      {/* Registration + Counter */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

        {/* Registration */}
        <div className="bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-[#7B1E3A] mb-8">
            Student Registration
          </h2>

          <form
            onSubmit={addStudent}
            className="space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Student Name"
              required
              className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7B1E3A]"
            />

            <select
              name="level"
              className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7B1E3A]"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            <button
              type="submit"
              className="w-full bg-[#7B1E3A] text-white py-4 rounded-lg font-semibold hover:bg-[#5E162C] transition"
            >
              Add Student
            </button>
          </form>
        </div>

        {/* Counter */}
        <div className="bg-white p-10 rounded-2xl shadow-lg text-center flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#7B1E3A] mb-8">
            Daily Practice Sessions
          </h2>

          <h1 className="text-7xl font-bold text-gray-800 mb-8">
            {count}
          </h1>

          <div className="flex justify-center gap-5">
            <button
              onClick={() => setCount(count + 1)}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-2xl font-bold hover:bg-green-700"
            >
              +
            </button>

            <button
              onClick={() => {
                if (count > 0) {
                  setCount(count - 1);
                }
              }}
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-2xl font-bold hover:bg-red-700"
            >
              -
            </button>
          </div>
        </div>

      </div>

      {/* Students */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center text-[#7B1E3A] mb-10">
          Registered Students
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.length > 0 ? (
            students.map((student) => (
              <StudentCard
                key={student.id}
                name={student.name}
                level={student.level}
              />
            ))
          ) : (
            <div className="lg:col-span-3 bg-white p-8 rounded-xl shadow text-center">
              No students registered yet.
            </div>
          )}
        </div>
      </section>

      {/* Reviews */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center text-[#7B1E3A] mb-10">
          Parent Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="font-bold text-[#7B1E3A] mb-3">
                Parent Feedback
              </h3>

              <p className="text-gray-700 leading-7">
                {review.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Workshops */}
      <section>
        <h2 className="text-4xl font-bold text-center text-[#7B1E3A] mb-10">
          Upcoming Workshops
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <div
              key={workshop.id}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-2xl font-bold text-[#7B1E3A] mb-4">
                Workshop #{workshop.id}
              </h3>

              <p className="text-lg text-gray-700">
                Participants: {workshop.totalProducts}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  </div>
);
}

export default StudentHub;