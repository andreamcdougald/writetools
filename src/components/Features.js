/* This example requires Tailwind CSS v2.0+ */

import feature3 from "../images/calm.svg";

export default function Features() {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32 text-left	">
      <div className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Planning makes perfect. Fool-proof narrative structures.
                </h2>

                <p className="mt-4 text-lg text-gray-500 ">
                  Harness the power of story with time-proven story frameworks.
                  Each broken down in easy to follow steps, with examples from
                  the world’s favourite best-sellers.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={feature3}
                alt="Achieve your writing goals"
              />
            </div>
          </div>
        </div>
      </div>
      {/* next feature */}
      <div className="relative mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div className="mt-6 pb-11 pt-11">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Get un-stuck or get going with prompts and warm ups.{" "}
                </h2>

                <p className="mt-4 text-lg text-gray-500 ">
                  Writetools is designed to inspire creative breakthroughs.
                  Complete short daily creative writing warmups to earn points
                  and an invaluable writing habit.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full  lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={feature3}
                alt="Atmospheres to help you focus"
              />
            </div>
          </div>
        </div>
      </div>
      {/* next feature */}
      <div className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  A calm mind is a creative mind.{" "}
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Immersive audio and visuals designed to keep you in the zone
                  and escape into your writing.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                src={feature3}
                alt="Achieve your writing goals"
              />
            </div>
          </div>
        </div>
      </div>
      {/* next feature */}
    </div>
  );
}
