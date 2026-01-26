"use client";

import { use } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getCaseStudyById } from "@/app/content";
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

    // We are on the client, so we import the content directly which is also safe if getCaseStudyById is in a shared file
    const caseStudy = getCaseStudyById(id, lang);

    if (!caseStudy) return null; // Or some error state

    return (
        <CaseStudyModal
            isOpen={true} // Always open when this route is active
            onClose={() => router.back()}
            caseStudy={caseStudy as any}
            lang={lang}
        />
    );
}
