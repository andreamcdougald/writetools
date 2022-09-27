import { StarIcon } from "@heroicons/react/20/solid";

export default function Testimonial() {
  return (
    <section className="overflow-hidden bg-gray-50 py-12 md:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <blockquote className="mt-10">
            <div className="mt-4 flex mx-auto flex-row items-center text-center w-100 center justify-center">
              <StarIcon className="text-sage h-5 w-5 " aria-hidden="true" />{" "}
              <StarIcon className="text-sage h-5 w-5 " aria-hidden="true" />{" "}
              <StarIcon className="text-sage h-5 w-5 " aria-hidden="true" />{" "}
              <StarIcon className="text-sage h-5 w-5 " aria-hidden="true" />{" "}
              <StarIcon className="text-sage h-5 w-5 " aria-hidden="true" />{" "}
            </div>
            <div className="mx-auto max-w-3xl text-center text-xl font-medium leading-9 text-gray-900">
              <p>
                &ldquo; This is like writing on a secluded beach, while at the
                same time learning storytelling tactics from the greats. I wish
                I found this a lot sooner! &rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">
                    Judith Black
                  </div>

                  <svg
                    className="mx-1 hidden h-5 w-5 text-sage md:block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-gray-500">
                    CEO, Retail Publishing House
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
