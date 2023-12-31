"use client";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { categories } from "@/categories";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";

function Categorie() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const [position, setPosition] = useState("bottom");
  return (
    <div className="mt-32">
      <div className="mx-52 flex items-center justify-center">
        <Card className="w-full hidden md:block">
          <CardContent className="flex items-center mt-5 justify-center space-x-2">
            <Input placeholder="Caută un produs..." />
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify-between"
                >
                  {value
                    ? categories.find((framework) => framework.title === value)
                        ?.label
                    : "Selectează un produs"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Caută un produs" />
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {categories.map((framework) => (
                      <CommandItem
                        key={framework.title}
                        value={framework.title}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === framework.title
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {framework.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Ordonează</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value="top">
                    Crescător
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="bottom">
                    Descrescător
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">
                    Cele mai noi
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardContent>
        </Card>
      </div>
      <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
            <a href="/biobazar/categorie/produse">
              <article className="relative flex flex-col overflow-hidden rounded-lg border">
                <div className="aspect-square overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                    src="https://img.freepik.com/free-vector/shopping-basket-with-food-vector-illustration-cart-with-product-buy-supermarket-vector-illustration_1284-47048.jpg?w=900&t=st=1699466044~exp=1699466644~hmac=563c61d0a88c5ce48144138b1fe94b6256a61f07dbfe08347d1543cdc46f0d9e"
                    alt=""
                  />
                </div>
                <div className="absolute top-0 m-2 rounded-full bg-white">
                  <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                    Sale
                  </p>
                </div>
                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                  <div className="mb-2 flex">
                    <p className="mr-3 text-sm font-semibold">$99.00</p>
                    <del className="text-xs text-gray-400"> $79.00 </del>
                  </div>
                  <h3 className="mb-2 text-sm text-gray-400">Fresh Apples</h3>
                </div>

                <button className=" group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-slate-100">
                  <div className="flex w-full items-center justify-center bg-green-500 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                    Contactează
                  </div>
                  <div className="flex items-center justify-center bg-green-500 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                    +
                  </div>
                </button>
              </article>
            </a>

            <a href="/biobazar/categorie/produse">
              <article className="relative flex flex-col overflow-hidden rounded-lg border">
                <div className="aspect-square overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                    src="https://img.freepik.com/free-vector/shopping-basket-with-food-vector-illustration-cart-with-product-buy-supermarket-vector-illustration_1284-47048.jpg?w=900&t=st=1699466044~exp=1699466644~hmac=563c61d0a88c5ce48144138b1fe94b6256a61f07dbfe08347d1543cdc46f0d9e"
                    alt=""
                  />
                </div>
                <div className="absolute top-0 m-2 rounded-full bg-white">
                  <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                    Sale
                  </p>
                </div>
                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                  <div className="mb-2 flex">
                    <p className="mr-3 text-sm font-semibold">$99.00</p>
                    <del className="text-xs text-gray-400"> $79.00 </del>
                  </div>
                  <h3 className="mb-2 text-sm text-gray-400">Fresh Apples</h3>
                </div>

                <button className=" group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-slate-100">
                  <div className="flex w-full items-center justify-center bg-green-500 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                    Contactează
                  </div>
                  <div className="flex items-center justify-center bg-green-500 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                    +
                  </div>
                </button>
              </article>
            </a>

            <a href="/biobazar/categorie/produse">
              <article className="relative flex flex-col overflow-hidden rounded-lg border">
                <div className="aspect-square overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                    src="https://img.freepik.com/free-vector/shopping-basket-with-food-vector-illustration-cart-with-product-buy-supermarket-vector-illustration_1284-47048.jpg?w=900&t=st=1699466044~exp=1699466644~hmac=563c61d0a88c5ce48144138b1fe94b6256a61f07dbfe08347d1543cdc46f0d9e"
                    alt=""
                  />
                </div>
                <div className="absolute top-0 m-2 rounded-full bg-white">
                  <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                    Sale
                  </p>
                </div>
                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                  <div className="mb-2 flex">
                    <p className="mr-3 text-sm font-semibold">$99.00</p>
                    <del className="text-xs text-gray-400"> $79.00 </del>
                  </div>
                  <h3 className="mb-2 text-sm text-gray-400">Fresh Apples</h3>
                </div>

                <button className=" group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-slate-100">
                  <div className="flex w-full items-center justify-center bg-green-500 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                    Contactează
                  </div>
                  <div className="flex items-center justify-center bg-green-500 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                    +
                  </div>
                </button>
              </article>
            </a>

            <a href="/biobazar/categorie/produse">
              <article className="relative flex flex-col overflow-hidden rounded-lg border">
                <div className="aspect-square overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                    src="https://img.freepik.com/free-vector/shopping-basket-with-food-vector-illustration-cart-with-product-buy-supermarket-vector-illustration_1284-47048.jpg?w=900&t=st=1699466044~exp=1699466644~hmac=563c61d0a88c5ce48144138b1fe94b6256a61f07dbfe08347d1543cdc46f0d9e"
                    alt=""
                  />
                </div>
                <div className="absolute top-0 m-2 rounded-full bg-white">
                  <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                    Sale
                  </p>
                </div>
                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                  <div className="mb-2 flex">
                    <p className="mr-3 text-sm font-semibold">$99.00</p>
                    <del className="text-xs text-gray-400"> $79.00 </del>
                  </div>
                  <h3 className="mb-2 text-sm text-gray-400">Fresh Apples</h3>
                </div>

                <button className=" group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-slate-100">
                  <div className="flex w-full items-center justify-center bg-green-500 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                    Contactează
                  </div>
                  <div className="flex items-center justify-center bg-green-500 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                    +
                  </div>
                </button>
              </article>
            </a>

            <a href="/biobazar/categorie/produse">
              <article className="relative flex flex-col overflow-hidden rounded-lg border">
                <div className="aspect-square overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                    src="https://img.freepik.com/free-vector/shopping-basket-with-food-vector-illustration-cart-with-product-buy-supermarket-vector-illustration_1284-47048.jpg?w=900&t=st=1699466044~exp=1699466644~hmac=563c61d0a88c5ce48144138b1fe94b6256a61f07dbfe08347d1543cdc46f0d9e"
                    alt=""
                  />
                </div>
                <div className="absolute top-0 m-2 rounded-full bg-white">
                  <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                    Sale
                  </p>
                </div>
                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                  <div className="mb-2 flex">
                    <p className="mr-3 text-sm font-semibold">$99.00</p>
                    <del className="text-xs text-gray-400"> $79.00 </del>
                  </div>
                  <h3 className="mb-2 text-sm text-gray-400">Fresh Apples</h3>
                </div>

                <button className=" group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-slate-100">
                  <div className="flex w-full items-center justify-center bg-green-500 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                    Contactează
                  </div>
                  <div className="flex items-center justify-center bg-green-500 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                    +
                  </div>
                </button>
              </article>
            </a>

            <a href="/biobazar/categorie/produse">
              <article className="relative flex flex-col overflow-hidden rounded-lg border">
                <div className="aspect-square overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                    src="https://img.freepik.com/free-vector/shopping-basket-with-food-vector-illustration-cart-with-product-buy-supermarket-vector-illustration_1284-47048.jpg?w=900&t=st=1699466044~exp=1699466644~hmac=563c61d0a88c5ce48144138b1fe94b6256a61f07dbfe08347d1543cdc46f0d9e"
                    alt=""
                  />
                </div>
                <div className="absolute top-0 m-2 rounded-full bg-white">
                  <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                    Sale
                  </p>
                </div>
                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                  <div className="mb-2 flex">
                    <p className="mr-3 text-sm font-semibold">$99.00</p>
                    <del className="text-xs text-gray-400"> $79.00 </del>
                  </div>
                  <h3 className="mb-2 text-sm text-gray-400">Fresh Apples</h3>
                </div>

                <button className=" group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-slate-100">
                  <div className="flex w-full items-center justify-center bg-green-500 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                    Contactează
                  </div>
                  <div className="flex items-center justify-center bg-green-500 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                    +
                  </div>
                </button>
              </article>
            </a>

            <a href="/biobazar/categorie/produse">
              <article className="relative flex flex-col overflow-hidden rounded-lg border">
                <div className="aspect-square overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                    src="https://img.freepik.com/free-vector/shopping-basket-with-food-vector-illustration-cart-with-product-buy-supermarket-vector-illustration_1284-47048.jpg?w=900&t=st=1699466044~exp=1699466644~hmac=563c61d0a88c5ce48144138b1fe94b6256a61f07dbfe08347d1543cdc46f0d9e"
                    alt=""
                  />
                </div>
                <div className="absolute top-0 m-2 rounded-full bg-white">
                  <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                    Sale
                  </p>
                </div>
                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                  <div className="mb-2 flex">
                    <p className="mr-3 text-sm font-semibold">$99.00</p>
                    <del className="text-xs text-gray-400"> $79.00 </del>
                  </div>
                  <h3 className="mb-2 text-sm text-gray-400">Fresh Apples</h3>
                </div>

                <button className=" group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-slate-100">
                  <div className="flex w-full items-center justify-center bg-green-500 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                    Contactează
                  </div>
                  <div className="flex items-center justify-center bg-green-500 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                    +
                  </div>
                </button>
              </article>
            </a>

            <a href="/biobazar/categorie/produse">
              <article className="relative flex flex-col overflow-hidden rounded-lg border">
                <div className="aspect-square overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                    src="https://img.freepik.com/free-vector/shopping-basket-with-food-vector-illustration-cart-with-product-buy-supermarket-vector-illustration_1284-47048.jpg?w=900&t=st=1699466044~exp=1699466644~hmac=563c61d0a88c5ce48144138b1fe94b6256a61f07dbfe08347d1543cdc46f0d9e"
                    alt=""
                  />
                </div>
                <div className="absolute top-0 m-2 rounded-full bg-white">
                  <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                    Sale
                  </p>
                </div>
                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                  <div className="mb-2 flex">
                    <p className="mr-3 text-sm font-semibold">$99.00</p>
                    <del className="text-xs text-gray-400"> $79.00 </del>
                  </div>
                  <h3 className="mb-2 text-sm text-gray-400">Fresh Apples</h3>
                </div>

                <button className=" group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-slate-100">
                  <div className="flex w-full items-center justify-center bg-green-500 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                    Contactează
                  </div>
                  <div className="flex items-center justify-center bg-green-500 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                    +
                  </div>
                </button>
              </article>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Categorie;
