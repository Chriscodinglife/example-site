import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";

type Props = {};

const index = (props: Props) => {
  const flexBetween = "flex items-center justify-between"; // common ui classes to center items and justify between
  return (
    <nav>
      {/* top nav full bar */}
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        {/* inner nav bar, basically the island inside the top bar */}
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* this will be used to set a gap between objects within the inner nav bar */}
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <img alt="logo" src={Logo} />
            {/* right side */}
            <div className={`${flexBetween} w-full`}>
              {/* this will be used for the inner left side of the right side of the nav bar */}
              <div className={`${flexBetween} gap-8 text-sm`}>
                <p>Home</p>
                <p>Benefits</p>
                <p>Our Classes</p>
                <p>Contact Us</p>
              </div>
              <div>
                <p>Sign In</p>
                <button>Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default index;
