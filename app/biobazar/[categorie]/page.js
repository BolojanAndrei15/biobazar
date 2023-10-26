"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { categories } from "@/categories";
import { useState } from "react";


function Categorie() {
  const [position, setPosition] = useState("ascending")
  return (
    <div className="flex">
      <div className="mx-20">
        <Card className="w-full flex flex-col space-x-2">
          <CardContent>
            <Input />
            <DropdownMenu>
  <DropdownMenuTrigger>Selectează o categorie</DropdownMenuTrigger>
  <DropdownMenuContent>
    {
      categories.map((category)=>{
        return (<DropdownMenuItem>{category.title}</DropdownMenuItem>)
      })
    }
  </DropdownMenuContent>
</DropdownMenu>
<DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Ordonează</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="ascending">Crescător</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="descending">Descrescător</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="latest">Cele mai noi</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Categorie;
