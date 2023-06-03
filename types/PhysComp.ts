import { PortableTextBlock } from "sanity"

export type PhysComp = {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    image: string;
    url: string;
    content: PortableTextBlock[];
}