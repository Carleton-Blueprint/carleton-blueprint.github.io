import { StaticImageData } from "next/image";
import React, { ReactElement } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
  

type ContactCardDataType = {
    title: string;
    description: string;
    icon: ReactElement;
    link: string;
};

export default function ContactCard({data}: {data: ContactCardDataType}) {
  return (
    <div className="box-border mb-12">
        <a href={data.link}>
        <Card className="ease-out duration-300 hover:drop-shadow-xl pt-16 max-w-96">
            <CardContent className="flex justify-center">
                {data.icon}
            </CardContent>
            <CardHeader className="text-center">
                <CardTitle>{data.title}</CardTitle>
                <CardDescription className="text-balance">{data.description}</CardDescription>
            </CardHeader>
        </Card>
        </a>
    </div>
    );
}