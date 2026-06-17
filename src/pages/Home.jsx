import { Navigate } from "react-router-dom";
import heroBg from "../assets/hero-bg.jpg";

function Home() {

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  if (!currentUser) {
    return <Navigate to="/" />;
  }



  return (
    <>
      <section
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="bg-black/60 p-12 rounded-xl text-center max-w-4xl">

          <h1 className="text-6xl font-bold text-white mb-6">
            Kuchipudi Dance Academy
          </h1>

          <p className="text-2xl text-yellow-300 mb-4">
            Welcome, {currentUser.username}
          </p>

          <p className="text-xl text-white">
            Preserving Tradition Through Dance
          </p>

          <button
            className="
            mt-8
            bg-[#7B1E3A]
            text-white
            px-8
            py-3
            rounded-lg
            hover:bg-[#5E162C]
            transition
            "
          >
            Explore Programs
          </button>

          <br />


        </div>
      </section>
    </>
  );
}

export default Home;