import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { AlignCenter, AlignLeft, BookText, Contact, Store } from "lucide-react";
import Home from "@/app/page";

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button
          variant="outline"
          className="w-6 h-6 flex justify-center items-center"
        >
          <AlignCenter />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Biobazar</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col justify-around items-center h-full">
          <ul
            className="text-xl font-semibold flex flex-col space-y-4 items-center
          "
          >
            <li>Acasă</li>
            <li>Biobazar</li>
            <li>Despre</li>
            <li>Contact</li>
          </ul>

          <div className="flex flex-col space-y-2">
            <Button>Înregistrează-te ca producător</Button>
            <Button variant="outline">Autentificare</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
