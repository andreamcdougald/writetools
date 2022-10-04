import { Signup } from "./Mailchimp";
import ShowPrice from "./ShowPrice";

export default function Footer(props) {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6  lg:py-24 lg:px-8">
        <h2 className="text-3xl  max-w-3xl  font-bold text-left tracking-tight text-white md:text-4xl">
          Join the waitlist today and be among the first to get latest updates
          on <span className="inline text-sage">Writetools</span>
        </h2>
        <div className="grid w-full h-8 grid-cols-[1fr_1fr_fr_1fr] lg:grid-cols-1">
          <div></div>
          <div className="min-w-max col-span-2 mt-7">
            <ShowPrice openPrice={props.openPrice} setOpenPrice={props.setOpenPrice} textWhite={true} />
          </div>
          <div></div>
        </div>
        <div className="py-8 mt-8 max-w-xl">
          <Signup viewedPrice={props.viewedPrice} />
        </div>
      </div>
    </div>
  );
}
