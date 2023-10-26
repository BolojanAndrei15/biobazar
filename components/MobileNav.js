import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "./ui/button"
import { AlignCenter, AlignLeft, BookText, Contact, Store } from "lucide-react"
import Home from "@/app/page"
  
function MobileNav() {
  return (
  <Sheet>
    <SheetTrigger>
        <Button variant="outline" className="w-6 h-6 flex justify-center items-center">
            <AlignCenter />
        </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Biobazar</SheetTitle>
      </SheetHeader>
      <div>
      <ul className="flex flex-col ">
        <li className="flex space-x-2 items-center">
        <Home />
            <h1>Acasă</h1>
            </li>
            <li className="flex space-x-2 items-center">
            <Store />
            <h1>Biobazar</h1>
            </li>
            <li className="flex space-x-2 items-center">
            <BookText />
            <h1>Despre</h1>
            </li>
            <li className="flex space-x-2 items-center">
            <Contact />
            <h1>Despre</h1>
            </li>
      </ul>

      <div className="flex space-x-3">
        <Button className="text-sm">Înregistrează-te ca producător</Button>
        <Button className="text-sm" variant="outline">Autentificare</Button>
      </div>

      </div>
    </SheetContent>
  </Sheet>
  )
}

export default MobileNav