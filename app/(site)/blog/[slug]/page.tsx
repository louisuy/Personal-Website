import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
    params: { slug: string }
}

export default async function Blog({ params }: Props) {
    const blog = await getBlog(params.slug);

    return (
        <div>
            {/* {blog.content} */}
        </div>
    )
}
