import { Computer, Tractor, Vegan } from "lucide-react";
import { AuthForm } from "./AuthForm";

function CallToAction() {
  return (
    <section className="call flex items-center xl:h-screen bg-green-50 font-poppins dark:bg-gray-900 ">
      <div className="justify-center mt-10 mb-20 flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-10 md:px-7">
        <div className="flex flex-wrap items-center justify-center -mx-4">
          <div className="max-w-2xl px-4 mb-16 lg:mb-0 lg:w-1/2">
            <h2 className="mb-6 text-4xl text-center md:text-left font-bold md:text-5xl  dark:text-gray-300">
              Alătură-te platformei
            </h2>
            <p className="mb-4 text-sm text-center md:text-left leading-loose text-slate-900 dark:text-gray-400">
              Suntem încântați să vă oferim oportunitatea de a face parte din
              comunitatea noastră de producători locali. La platforma noastră,
              punem accent pe promovarea și susținerea afacerilor mici și a
              producătorilor locali. Dacă sunteți un fermier pasionat, un meșter
              priceput sau un producător local dedicat, vă invităm să vă
              alăturați misiunii noastre de a aduce produsele locale în atenția
              consumatorilor.
            </p>

            <ul className=" mb-4 grid  grid-cols-1 sm:grid-cols-2 gap- ">
              <li className="flex font-semibold items-center mb-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="w-2 mr-2 h-2 bg-green-600 rounded-full"></span>
                Acces la o Audiență Mai Largă
              </li>
              <li className=" font-semibold flex items-center mb-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="w-2 mr-2 h-2 bg-green-600 rounded-full"></span>
                Expunere Mai Mare pentru Produsele Bio
              </li>
              <li className="flex items-center mb-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                <span className="w-2 mr-2 h-2 bg-green-600 rounded-full"></span>
                Marketing și Promovare
              </li>
              <li className="flex items-center mb-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                <span className="w-2 mr-2 h-2 bg-green-600 rounded-full"></span>
                FeedBack Clienți
              </li>
              <li className="flex items-center mb-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                <span className="w-2 mr-2 h-2 bg-green-600 rounded-full"></span>
                Susținerea Agriculturii Durabile
              </li>
              <li className="flex items-center mb-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                <span className="w-2 mr-2 h-2 bg-green-600 rounded-full"></span>
                Promovare locală
              </li>
            </ul>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-sm mx-auto lg:mr-0 lg:ml-auto">
              <AuthForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
