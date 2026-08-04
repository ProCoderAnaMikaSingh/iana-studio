import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const scroll = () => {

      if (window.scrollY > 400) {

        setShow(true);

      } else {

        setShow(false);

      }

    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);

  }, []);

  const top = () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };

  return (

    <>

      {show && (

       <button

  onClick={top}

  className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-[#8b5e34] text-white shadow-2xl hover:scale-110 hover:rotate-180 transition-all duration-500 z-50 animate-bounce"

>

          <FaArrowUp className="mx-auto"/>

        </button>

      )}

    </>

  );

}

export default BackToTop;