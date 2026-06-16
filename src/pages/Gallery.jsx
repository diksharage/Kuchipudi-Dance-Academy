
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";

function Gallery() {
  return (
    <>


      <div className="bg-pink-50 min-h-screen">

        <h1 className="text-5xl text-center font-bold py-10">
          Gallery
        </h1>

        <div className="grid md:grid-cols-3 gap-6 p-10">

          <img
            src={gallery1}
            alt=""
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />

          <img
            src={gallery2}
            alt=""
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />

          <img
            src={gallery3}
            alt=""
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />

          <img
            src={gallery4}
            alt=""
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />

          <img
            src={gallery5}
            alt=""
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />

        </div>

      </div>

    </>
  );
}

export default Gallery;