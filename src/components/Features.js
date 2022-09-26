/* This example requires Tailwind CSS v2.0+ */
import feature1 from "../images/feature1.png";
import feature1_5 from "../images/feature1-5.png";
import feature2 from "../images/feature2.png";
import feature3 from "../images/feature3.png";

export default function Features() {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32 text-left	">
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div className="mt-6 pb-11 pt-11">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Setting you in the right mood to focus better
                </h2>

                <p className="mt-4 text-lg text-gray-500 ">
                  Choose where you want to be with our selections of immersive
                  playlists and background so you can be in a calm,
                  distraction-free environment.
                </p>
                <img
                  className="max-w-sm pt-9 "
                  src={feature1_5}
                  alt="Atmospheres to help you focus"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full  lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={feature1}
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
                  Set your writing goal. We will help you reach it
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Writing is like a marathon. It’s not about reaching a big
                  goal, it’s about doing it regularly. Set your writing goals
                  and our smart notifications will guide you to write weekly or
                  daily!
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={feature2}
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
                  Stay motivated and receive points
                </h2>

                <p className="mt-4 text-lg text-gray-500 ">
                  Make progress and earn points! Don’t forget to reward yourself
                  after all your hard work. You can use Writemind points for
                  printing your work, purchasing new backgrounds, music,
                  unlocking educational videos from professional writers and
                  more.
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
    </div>
  );
}
