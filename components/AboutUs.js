import React from "react";
import { Computer, Tractor, Vegan } from "lucide-react";
function AboutUs() {
  return (
    <section className="flex items-center  xl:h-screen font-poppins dark:bg-gray-800 ">
      <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="px-4 mb-10 text-center md:mb-20">
          <p className="mb-2 text-lg font-semibold text-green-500 dark:text-gray-400">
            Despre Noi
          </p>
          <h2 className="pb-2 text-xl font-bold text-gray-800 md:text-4xl dark:text-gray-300">
            Biobazar-ul Digital Moșnița Nouă
          </h2>
          <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded mx-auto md:mb-14">
            <div className="flex-1 h-2 bg-green-200"></div>
            <div className="flex-1 h-2 bg-green-400"></div>
            <div className="flex-1 h-2 bg-green-300"></div>
          </div>
        </div>
        <div className="flex flex-wrap ">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <img
              src="https://images.unsplash.com/photo-1506484381205-f7945653044d?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="relative z-40 object-cover w-full h-96"
            />
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
            <h2 className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-green-500 dark:border--400 dark:text-gray-300">
              Primăria Moșnița este dedicată sprijinirii producătorilor locali{" "}
            </h2>
            <p className="mb-4  text-base leading-7 text-gray-500 dark:text-gray-400">
              În parteneriat strâns cu agricultorii, fermierii și micii
              producători din comunitatea noastră, am creat un loc în care
              puteți descoperi arome autentice și gusturi locale. De la fructe
              și legume proaspete de sezon la produse lactate de calitate și
              delicii gătite în casă, biobazarul nostru vă oferă o gamă variată
              de produse.
            </p>
            <ul className="mb-10">
              <li className="flex font-semibold items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                <span className="mr-3 text-green-500 dark:text-green-400">
                  <Vegan />
                </span>
                Produse Locale de Calitate toate provenind de la producători
                locali dedicați.{" "}
              </li>
              <li className=" font-semibold flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                <span className="mr-3 text-green-500 dark:text-green-400">
                  <Tractor />
                </span>
                Sprijinirea Agriculturii Sustenabile și promovarea unei
                agriculturi sănătoase.{" "}
              </li>
              <li className="flex items-center mb-4 text-base font-semibold text-gray-600 dark:text-gray-400">
                <span className="mr-3 text-green-500 dark:text-green-400 ">
                  <Computer />
                </span>
                Inițiativă susținută de Primăria Moșnița - Digitalizăm România
                împreună
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
