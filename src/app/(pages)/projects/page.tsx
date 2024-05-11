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

export default function Projects() {
  const res = [
    {
      title: "Project 1",
      description: "Project 1 Description",
      content: "Project 1 Content",
      footer: "Project 1 Footer",
    },
    {
      title: "Project 2",
      description: "Project 2 Description",
      content: "Project 2 Content",
      footer: "Project 2 Footer",
    },
    {
      title: "Project 3",
      description: "Project 3 Description",
      content: "Project 3 Content",
      footer: "Project 3 Footer",
    },
    {
      title: "Project 4",
      description: "Project 4 Description",
      content: "Project 4 Content",
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
      <Tabs defaultValue="Project 1">
        <TabsList className=" bg-blueprint-300 text-white">
          {res.map((data) => (
            <TabsTrigger className="px-10" value={data.title}>
              {data.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {res.map((data) => (
          <TabsContent value={data.title}>
            <Card>
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
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
