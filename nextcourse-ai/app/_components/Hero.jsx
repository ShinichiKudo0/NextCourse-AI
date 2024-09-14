import React from 'react'

function Hero() {
  return (
    <div>
        <section className="bg-gray-900 text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Ai Course Generator

        <span className="sm:block"> Custom Learning Paths, Powered by Ai </span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl sm:text-xl/relaxed">
      Experience education like never before with AI-powered, custom-built courses. Personalize your learning path to match your goals and pace, and achieve success on your terms.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-16 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          Get Started
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero