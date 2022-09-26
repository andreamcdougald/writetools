/* This example requires Tailwind CSS v2.0+ */
export default function Intro() {
  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Our Vision
          </p>
          <p className="mx-auto mt-5 max-w-4xl text-xl text-gray-500">
            Did you know that writing can help you ease feelings anxious and
            reduce stress? Even with knowing all the benefits, it’s still hard
            to get into it and do it regularly. This is why we built Writemind.
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            Our company vision is to guide our users to feel calmer, have better
            focus, and eventually build a habit of writing.
          </p>
        </div>
      </div>
    </div>
  );
}
