"use client";

import { use, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { client } from "@/sanity/client";
import CaseStudyModal from "@/components/CaseStudyModal";

// Client component wrapper to handle the async data fetching in a way that allows us to use the existing Modal
// Actually, intercepting routes can be Server Components, but the Modal needs client interactivity.
// Let's keep this file as Client Component for simplicity in handling the router, 
// OR use a Server Component that passes data to a Client "ModalWrapper".
// Given getCaseStudyById is just a function reading a local object, we can run it anywhere.

export default function InterceptedWorkPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const searchParams = useSearchParams();
    const lang = searchParams.get('lang') === 'en' ? 'en' : 'es';
    const [caseStudy, setCaseStudy] = useState<any>(null);

    useEffect(() => {
        // If ID is numeric strings '1', '2' etc, it might be legacy static. 
        // But since we want to move to CMS, let's try fetch from Sanity.
        // Sanity IDs are usually UUIDs.

        const query = `*[_type == "caseStudy" && _id == "${id}"][0]{
        _id,
        title,
        subtitle,
        tag,
        tagDisplay,
        color,
        "img": mainImage.asset->url,
        details,
        stats,
        "gallery": gallery[].asset->url
    }`;

        client.fetch(query).then(data => {
            if (data) {
                setCaseStudy({ ...data, id: data._id });
            } else {
                // Fallback for untracked static items if needed, or just handle missing
                // console.log("Case study not found in Sanity");
            }
        });
    }, [id]);

    if (!caseStudy) return null; // Loading state could be added here

    return (
        <CaseStudyModal
            isOpen={true}
            onClose={() => router.back()}
            caseStudy={caseStudy}
            lang={lang}
        />
    );
}
