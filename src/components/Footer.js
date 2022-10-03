import { Signup } from "./Mailchimp";

export default function Footer() {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6  lg:py-24 lg:px-8">
        <h2 className="text-3xl  max-w-3xl  font-bold text-left tracking-tight text-white md:text-4xl">
          Join the waitlist today and be among the first to get latest updates
          on <span className="inline text-sage">Writetools</span>
        </h2>
        <div className="py-8 mt-8 max-w-xl">
          <Signup />
        </div>
      </div>
    </div>
  );
}
