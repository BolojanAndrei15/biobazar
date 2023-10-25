import {
    Sheet,
    SheetContent,

    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "./ui/button"
import { AlignLeft, Store } from "lucide-react"
import Home from "@/app/page"
  
function MobileNav() {
  return (
  <Sheet>
    <SheetTrigger>
        <Button variant="outline" className="w-6 h-6 flex justify-center items-center">
            <AlignLeft />
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
            <Store />
            <h1>Biobazar</h1>
            </li>
        <li>Contact</li>
      </ul>

      <div>
        <Button>Înregistrează-te ca producător</Button>
        <Button variant="outline">Autentificare</Button>
      </div>

      </div>
    </SheetContent>
  </Sheet>
  )
}

export default MobileNav