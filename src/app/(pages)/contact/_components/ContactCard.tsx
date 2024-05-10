import { StaticImageData } from "next/image";
import React, { ReactElement } from "react";
import { ContactCardDataType } from "@/lib/contentful";
import { FaDiscord } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

enum IconType {
    discord = "discord",
    instagram = "instagram",
    email = "email",
}

const iconElements = {
    "discord": <FaDiscord className="size-24 text-blueprint-400"/>,
    "instagram": <GrInstagram className="size-24 text-blueprint-400"/>,
    "email": <MdOutlineAlternateEmail className="size-24 text-blueprint-400"/>,
    "linkedin": <FaLinkedinIn className="size-24 text-blueprint-400"/>,
}

export default function ContactCard({data}: {data: ContactCardDataType}) {
  return (
    <div className="box-border mb-12">
        <a href={data.link}>
        <Card className="ease-out duration-300 hover:drop-shadow-xl pt-10 max-w-64 min-h-full">
            <CardContent className="flex justify-center">
                {iconElements[data.icon as IconType] || <div>Icon not found</div>}
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