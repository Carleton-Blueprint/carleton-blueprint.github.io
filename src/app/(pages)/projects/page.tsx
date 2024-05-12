import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import CIWHV from "./_assets/CIWHV_logo_square.png";

export default function Projects() {
  const res = [
    {
      title: "CIWHV",
      description: "Workplace Stop",
      content:
        "We are developing a web platform for called Workplace Stop, a toolkit for workers in Canada to navigate the various systems when experiencing bullying, harassment, or systemic or psychological harm.",
      image: CIWHV,
      footer: "Project 1 Footer",
    },
    {
      title: "Beneficent",
      description: "Interest-Free Loan Tracker",
      content:
        "We developed a web application that allows Beneficent to better track their interest-free loan lending program.",
      footer: "Project 2 Footer",
    },
    {
      title: "Allo Canada",
      description: "Settlement and Integration Services",
      content:
        "We are developing a web application that centralizes services which newcomers often need to access throughout their settlement and integration journeys.",
      footer: "Project 3 Footer",
    },
    {
      title: "Urban Minds",
      description: "Youth Empowerment Platform",
      content:
        "We are developing a web application that allows them to empower youth to take on more city-building related projects in their community.",
      footer: "Project 4 Footer",
    },
    {
      title: "Project 5",
      description: "Project 5 Description",
      content: "Project 5 Content",
      footer: "Project 5 Footer",
    },
  ];
  return (
    <div className="flex items-center flex-col m-16">
      <h1 className="text-4xl font-bold mb-4">Current Projects</h1>
      <Tabs defaultValue={res[0].title} className="max-w-min">
        <TabsList className="bg-blueprint-300 text-white">
          {res.map((data) => (
            <TabsTrigger key={uuidv4()} className="px-10" value={data.title}>
              {data.title}
            </TabsTrigger>
          ))}
        </TabsList>
        <div>
          {res.map((data) => (
            <TabsContent key={uuidv4()} value={data.title}>
              <Card className="flex">
                <div>
                  <CardHeader>
                    <CardTitle>{data.title}</CardTitle>
                    <CardDescription>{data.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{data.content}</p>
                  </CardContent>
                  <CardFooter>
                    <p>{data.footer}</p>
                  </CardFooter>
                </div>
                <Image
                  src={data.image || CIWHV}
                  alt={data.title}
                  width={250}
                  height={250}
                />
              </Card>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
