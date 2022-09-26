import heroImg from "../images/book.png";
import ShowPrice from "./ShowPrice";
import { Signup } from "./Mailchimp";

export default function Hero() {
  return (
    <div className="relative bg-cream">
      <main className="lg:relative">
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-2/5">
          <img
            className="lg:rounded-bl-[120px]

            absolute inset-0 h-full w-full object-cover"
            src={heroImg}
            alt=""
          />
        </div>

        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:pb-[10rem] lg:pt-24 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Lorem ipsum write with</span>{" "}
              <span className="inline text-sage">Writemind</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua
            </p>

            <div className="grid w-full h-8 grid-cols-[1fr_1fr_fr_1fr] lg:grid-cols-1">
              <div></div>
              <div className="min-w-max col-span-2">
                <ShowPrice />
              </div>
              <div></div>
            </div>

            <div className="py-8 mt-8 lg:absolute">
              <Signup />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
