import { assets } from "../assets/assets";
import MoveUpOnRender from "../components/MoveUpOnRender";

const Contact = () => {
  return (
    <MoveUpOnRender id="contact">
      <div className="text-2xl text-center pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className=" my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm ">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600 ">Our OFFICE</p>
          <p className="text-gray-500">
            120 W 45th Street <br /> New York, NY 10036, USA
          </p>
          <p className="text-gray-500">
            Tel: +1 (212) 555-0199 <br /> Email: support@appointify.care
          </p>
          <p className="font-semibold text-lg text-gray-600 ">
            Careers at APPOINTIFY
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className=" border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
    </MoveUpOnRender>
  );
};

export default Contact;