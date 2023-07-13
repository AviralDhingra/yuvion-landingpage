/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-scroll";
import "./App.css";
import logo from "./imgs/logo.png";
// importing all images for the imgs folder

import analyze from "./imgs/analyze.png";
import api from "./imgs/api.png";
import currency from "./imgs/currency.png";
import price from "./imgs/price.png";
import support from "./imgs/support.png";
import track from "./imgs/track.png";

import db from "./form_collect.js";

function NavLink({ children, ...props }) {
  return (
    <Link
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80 cursor-pointer"
      {...props}
    >
      {children}
    </Link>
  );
}

function Modal(props) {
  // console.log(props); // this will print all props received by the component

  const { email: initialEmail, onClose } = props;

  const [FirstName, setFirstName] = useState("");
  const [Email, setEmail] = useState(initialEmail);
  const [StoreSize, setStoreSize] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    // console.log(FirstName);
    // console.log(Email);
    // console.log(StoreSize);

    const emailRef = db.collection("emailList");

    emailRef
      .add({
        FirstName: FirstName,
        lEmailast: Email,
        StoreSize: StoreSize,
      })
      .then((docRef) => {
        // console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed z-50 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={handleBackgroundClick}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Join our Waitlist
                </h3>
                <div className="mt-2">
                  <form onSubmit={submitForm}>
                    <label>Name</label>
                    <input
                      type="text"
                      className="w-full p-2 mb-2 border border-gray-300 rounded"
                      required
                      name="name"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label>Email</label>
                    <input
                      type="email"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2 mb-2 border border-gray-300 rounded"
                      required
                      name="email"
                    />
                    <label>Store Size</label>
                    <select
                      className="w-full p-2 mb-2 border border-gray-300 rounded"
                      required
                      name="business_size"
                      onChange={(e) => setStoreSize(e.target.value)}
                    >
                      <option value="">Select Business Size</option>
                      <option value="small">1-10 Employees</option>
                      <option value="medium">10-50 Employees</option>
                      <option value="medium">50-200 Employees</option>
                      <option value="large">200+ Emplyees</option>
                    </select>
                    <button
                      type="submit"
                      className="w-full p-2 bg-green text-white rounded font-extrabold hover:bg-green-100 transition-all duration-300"
                    >
                      Notify
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function Modal() {
//   return (
//     <div
//       class="fixed z-10 inset-0 overflow-y-auto"
//       aria-labelledby="modal-title"
//       role="dialog"
//       aria-modal="true"
//     >
//       <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//         <div
//           class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
//           aria-hidden="true"
//         ></div>

//         <span
//           class="hidden sm:inline-block sm:align-middle sm:h-screen"
//           aria-hidden="true"
//         >
//           &#8203;
//         </span>

//         <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//           <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//             <div class="sm:flex sm:items-start">
//               <div class="mt-3 text-center sm:mt-0 sm:text-left">
//                 <h3
//                   class="text-lg leading-6 font-medium text-gray-900"
//                   id="modal-title"
//                 >
//                   Join our Waitlist
//                 </h3>
//                 <div class="mt-2">
//                   <form onSubmit="submitForm()">
//                     <input
//                       type="text"
//                       placeholder="Name"
//                       class="w-full p-2 mb-2 border border-gray-300 rounded"
//                       required
//                     />
//                     <input
//                       type="email"
//                       placeholder="Email"
//                       value={this.state.props.email}
//                       class="w-full p-2 mb-2 border border-gray-300 rounded"
//                       required
//                     />
//                     <select
//                       class="w-full p-2 mb-2 border border-gray-300 rounded"
//                       required
//                     >
//                       <option value="">Select Business Size</option>
//                       <option value="small">Small</option>
//                       <option value="medium">Medium</option>
//                       <option value="large">Large</option>
//                     </select>
//                     <button
//                       type="submit"
//                       class="w-full p-2 bg-blue-500 text-white rounded"
//                     >
//                       Notify
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function App() {
  const [RegisterClicked, setRegisterClicked] = useState(false);
  const [EmailID, setEmailID] = useState("");

  const openModal = () => {
    setRegisterClicked(true);
  };

  const closeModal = () => {
    setRegisterClicked(false);
  };
  return (
    <div className="2xl:space-y-9 3xl:space-y-24 ">
      {RegisterClicked ? <Modal email={EmailID} onClose={closeModal} /> : null}
      <header>
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex">
                <img className="w-auto h-auto" src={logo} alt="" />
              </a>
            </div>

            <button
              type="button"
              className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <div className="lg:flex lg:items-center lg:space-x-10 w-full">
              <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10 flex-grow">
                <NavLink to="whyUs">Why Us?</NavLink>

                <NavLink to="benefits">Benefits</NavLink>
                <NavLink to="features">Features</NavLink>

                {/* <NavLink to="pricing-section">Pricing</NavLink>
                <NavLink to="pricing-section">Testimonials</NavLink> */}
                {/* <NavLink to="faq">FAQ</NavLink> */}

                {/* <div className="w-px h-5 bg-black/20"></div>

    <a
      href="#"
      title=""
      className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
    >
      {" "}
      Log in{" "}
    </a> */}
              </div>

              <button
                className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white rounded-md"
                onClick={() => openModal()}
              >
                {" "}
                Register{" "}
              </button>
            </div>
          </div>
        </div>
      </header>

      <section
        className="py-10 sm:py-16 lg:py-24"
        style={{ height: "100%", width: "100%" }}
      >
        <div
          id="main_section_div"
          className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
        >
          <div className="grid items-center grid-cols-1 gap-60 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                Strategic Pricing, with
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-green"></span>
                  <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                    Yuvion.
                  </h1>
                </div>
              </h1>

              <p className="mt-8 text-lg text-black sm:text-2xl ">
                Delivering instant alerts, automation and analysis for
                competitive pricing to online stores.
              </p>

              <div id="emailRegister" className="mt-10">
                <input
                  type="text"
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                  placeholder="Email ID"
                  onChange={(e) => setEmailID(e.target.value)}
                />
                <button
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-extrabold text-white transition-all duration-200 bg-green hover:bg-green-100 focus:bg-green-100 rounded-md"
                  onClick={() => openModal()}
                >
                  Register
                </button>
              </div>
            </div>

            <div>
              <img
                className="w-full scale-125"
                src="https://lukaszadam.com/assets/downloads/storefront_illustration.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section class="py-10 bg-gray-50 sm:py-16 lg:py-24 " id="whyUs">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
            <div class="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
              <div class="overflow-hidden aspect-w-3 aspect-h-4">
                <img
                  class="object-cover object-top origin-top scale-150"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/team-work.jpg"
                  alt=""
                />
              </div>

              <div class="relative">
                <div class="h-full overflow-hidden aspect-w-3 aspect-h-4">
                  <img
                    class="object-cover scale-150 lg:origin-bottom-right"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/woman-working-on-laptop.jpg"
                    alt=""
                  />
                </div>

                {/* <div class="absolute inset-0 grid w-full h-full place-items-center">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center w-12 h-12 text-blue-600 bg-white rounded-full shadow-md lg:w-20 lg:h-20"
                  >
                    <svg
                      class="w-6 h-6 lg:w-8 lg:h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                    </svg>
                  </button>
                </div> */}
              </div>
            </div>

            <div class="flex flex-col items-start xl:px-16">
              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Tired of never ranking first on Amazon?{" "}
              </h2>
              <p class="mt-4 text-base leading-relaxed text-gray-600">
                Yuvion ensures your products stay visible on all online stores.
                Our tool tracks your competitor prices and if they undercut you,
                Yuvion instantly alerts you or adjusts your price, ensuring you
                remain the first choice. Stay on top with Yuvion, your secret to
                boosted sales and profitability.
              </p>

              <button
                onClick={() => openModal()}
                class="inline-flex items-center justify-center px-5 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 rounded-md hover:opacity-90 focus:opacity-90 lg:mt-auto bg-gradient-to-r from-green to-green-100"
              >
                Join Waitlist
                <svg
                  class="w-5 h-5 ml-8 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="benefits">
        {/* <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
          <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div class="max-w-2xl mx-auto text-center">
              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                We will save your business...
              </h2>
              <p class="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                (Annually)
              </p>
            </div>

            <div class="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
              <div>
                <h3 class="font-bold text-7xl">
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                    {" "}
                    26K+{" "}
                  </span>
                </h3>
                <p class="mt-4 text-xl font-medium text-gray-900">Dollars</p>
                <p class="text-base mt-0.5 text-gray-500">
                  Gaining competetive advantage
                </p>
              </div>

              <div>
                <h3 class="font-bold text-7xl">
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                    {" "}
                    3500+{" "}
                  </span>
                </h3>
                <p class="mt-4 text-xl font-medium text-gray-900">Hours</p>
                <p class="text-base mt-0.5 text-gray-500">
                  Automating manual tasks
                </p>
              </div>

              <div>
                <h3 class="font-bold text-7xl">
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                    {" "}
                    37+{" "}
                  </span>
                </h3>
                <p class="mt-4 text-xl font-medium text-gray-900">
                  Team members
                </p>
                <p class="text-base mt-0.5 text-gray-500">
                  Working for your success
                </p>
              </div>
            </div>
          </div>
        </section> */}
        <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="max-w-xl mx-auto text-center">
              <div class="inline-flex px-4 py-1.5 mx-auto rounded-full bg-gradient-to-r from-green to-green-100">
                <p class="text-xs font-semibold tracking-widest text-white uppercase">
                  3500+ Hours Saved{" "}
                </p>
              </div>
              <h2 class="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Benefits{" "}
              </h2>
              <p class="mt-4 text-base leading-relaxed text-gray-600">
                How Yuvion drives success to any kind of E-commerce business.
              </p>
            </div>

            <div class="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
              <div class="transition-all duration-200 bg-white hover:shadow-xl">
                <div class="py-10 px-9">
                  <svg
                    class="w-16 h-16 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <h3 class="mt-8 text-lg font-semibold text-black">
                    Expand Your Market Insight{" "}
                  </h3>
                  <p class="mt-4 text-base text-gray-600">
                    Gain a competitive edge with expansive tracking
                    capabilities, not limited to Amazon. Keep tabs on different
                    sellers across various platforms, all while monitoring
                    pricing trends in different currencies.
                  </p>
                </div>
              </div>

              <div class="transition-all duration-200 bg-white hover:shadow-xl">
                <div class="py-10 px-9">
                  <svg
                    class="w-16 h-16 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                  <h3 class="mt-8 text-lg font-semibold text-black">
                    Automate and Optimize Pricing
                  </h3>
                  <p class="mt-4 text-base text-gray-600">
                    Automated price adjustment, you can stay ahead in the market
                    without constant monitoring. Set hard and soft profit
                    limits, and let our system adjust your prices based on
                    competitor's activity.
                  </p>
                </div>
              </div>

              <div class="transition-all duration-200 bg-white hover:shadow-xl">
                <div class="py-10 px-9">
                  <svg
                    class="w-16 h-16 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <h3 class="mt-8 text-lg font-semibold text-black">
                    Unlock Informed Decisions{" "}
                  </h3>
                  <p class="mt-4 text-base text-gray-600">
                    Harness the power of data with Yuvion. Our in-depth product
                    analytics provide you with essential insights, like median
                    price, lowest price YTD, and more, equiping you to make
                    strategic, profit maximizing decesions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section id="features" class="py-10 bg-white sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-xl mx-auto text-center mb-12">
            {/* <div class="inline-flex px-4 py-1.5 mx-auto rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600">
              <p class="text-xs font-semibold tracking-widest text-white uppercase">
                3500+ Hours Saved{" "}
              </p>
            </div> */}
            <h2 class="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Features{" "}
            </h2>
            <p class="mt-4 text-base leading-relaxed text-gray-600">
              Discover what we have to offer
            </p>
          </div>
          <div class="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
            <div>
              <div class="relative flex items-center justify-center mx-auto">
                <img
                  src={support}
                  alt="feature1"
                  style={{ width: "72px", height: "75px" }}
                />
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">
                Multi-platform Support
              </h3>
              <p class="mt-4 text-base text-gray-600">
                Track sellers not just on Amazon, but also on other platforms.
                This tool is designed for expanding your market reach and
                understanding.
              </p>
            </div>

            <div>
              <div class="relative flex items-center justify-center mx-auto">
                <img
                  src={price}
                  alt="feature1"
                  style={{ width: "72px", height: "75px" }}
                />
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">
                Dynamic Pricing
              </h3>
              <p class="mt-4 text-base text-gray-600">
                Track sellers not just on Amazon, but also on other platforms.
                This tool is designed for expanding your market reach and
                understanding.
              </p>
            </div>

            <div>
              <div class="relative flex items-center justify-center mx-auto">
                <img
                  src={analyze}
                  alt="feature1"
                  style={{ width: "72px", height: "75px" }}
                />
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">
                Advanced Analytics
              </h3>
              <p class="mt-4 text-base text-gray-600">
                Track sellers not just on Amazon, but also on other platforms.
                This tool is designed for expanding your market reach and
                understanding.
              </p>
            </div>

            <div>
              <div class="relative flex items-center justify-center mx-auto">
                <img
                  src={currency}
                  alt="feature1"
                  style={{ width: "72px", height: "75px" }}
                />
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">
                Global Currency Support
              </h3>
              <p class="mt-4 text-base text-gray-600">
                Seamlessly handle transactions in different currencies,
                broadening your global reach.
              </p>
            </div>

            <div>
              <div class="relative flex items-center justify-center mx-auto">
                <img
                  src={track}
                  alt="feature1"
                  style={{ width: "72px", height: "75px" }}
                />
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">
                In-depth Seller Tracking{" "}
              </h3>
              <p class="mt-4 text-base text-gray-600">
                Keep a close eye on different sellers and their strategies,
                allowing for a competitive edge.
              </p>
            </div>

            <div>
              <div class="relative flex items-center justify-center mx-auto">
                <img
                  src={api}
                  alt="feature1"
                  style={{ width: "72px", height: "75px" }}
                />
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">
                API Integration
              </h3>
              <p class="mt-4 text-base text-gray-600">
                Utilize our API to integrate with your existing systems for
                seamless data exchange and enhanced functionality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
