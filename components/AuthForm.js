import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AuthForm() {
  return (
    <Card className="min-w-[250px]">
      <CardHeader className="text-center">
        <CardTitle className="text-[20px]">Înregistrare producător </CardTitle>
        <CardDescription>
          Ești la un clcik distanță de a-ți promova afacerea
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5 ">
              <Label htmlFor="name">Nume producător</Label>
              <Input id="name" placeholder="Numele porducatorului" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Adresa de e-mail</Label>
              <Input id="name" placeholder="biobazar@gmail.com" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Parolă</Label>
              <Input
                id="name"
                placeholder="Introdu o parolă cu cel puțin 6 car"
              />
            </div>
            <div className="space-x-2 flex items-center">
              <Checkbox />
              <Label htmlFor="framework">
                Acceptă{" "}
                <span className="font-semibold">Termeni și condiții</span>
              </Label>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex w-full">
        <Button className="w-full bg-green-500">Înregistrează-te</Button>
      </CardFooter>
    </Card>
  );
}
