import React from "react";

const Hero = () => {
  return (
    <section className=" text-white">
      <div className="mt-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            <span className="sm:block">
              Unleash Your Development Potential{" "}
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Your one-stop platform to connect, collaborate, and conquer any
            coding challenge.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/login">
              <button className="btn btn-primary text-white">
                Get started
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
