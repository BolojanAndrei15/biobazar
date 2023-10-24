import React from "react";
import { ShoppingBasket } from "lucide-react";
import { Button } from "./ui/button";
import ProductCards from "./ProductCard";
import { categories } from "@/categories";

function HeroSection() {
  return (
    <section className="pt-24 bg-white">
      <div className="px-8 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-center md:w-11/12 xl:w-9/12 ">
          <h1 className="mb-8 text-3xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
            <span>Bine ați venit la </span>{" "}
            <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-green-500 lg:inline">
              Biobazarul Moșnița Nouă
            </span>
          </h1>
          <p className="px-0 mb-8 text-sm text-center  text-gray-600 md:text-xl lg:px-24 ">
            Descoperiți lumea gusturilor autentice la un singur click distanță.
            Vă aducem frumusețea și savoarea piețelor tradiționale direct la ușa
            dvs.
          </p>
          <div className="flex flex-col justify-center items-center  pt-2 pb-10">
            <div className="min-w-[275px] sm:min-w-[475px]  md:min-w-[700px] xl:min-w-[900px] mt-3 grid grid-cols-1 gap-5  sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
              {categories.map((category) => (
                <ProductCards
                  title={category.title}
                  Icon={category.icon}
                  bgColor={category.bgColor}
                />
              ))}
            </div>
          </div>

          <div className="mb-4 flex flex-col md:flex-row md:space-y-0 md:space-x-2 space-y-2 md:mb-8 md:justify-center">
            <Button className="bg-green-500 hover:bg-green-600 flex space-x-2">
              <p>Începe cumpărăturile</p> <ShoppingBasket />
            </Button>
            <Button variant="outline">Înregistrează-te gratuit</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
