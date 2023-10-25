import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
function MobileNav() {
  return (
  <Sheet>
    <SheetTrigger>Open</SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Biobazar</SheetTitle>
      </SheetHeader>
      <div>
      <ul className="flex flex-col space-x-3">
        <li>Acasă</li>
        <li>Biobazar</li>
        <li>Despre</li>
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