"use client";

import { use } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getCaseStudyBySlug } from "@/app/content";
import CaseStudyModal from "@/components/CaseStudyModal";

export default function InterceptedWorkPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const router = useRouter();
    const searchParams = useSearchParams();
    const lang = searchParams.get('lang') === 'en' ? 'en' : 'es';

    const caseStudyRaw = getCaseStudyBySlug(slug, lang);
    const caseStudy = caseStudyRaw ? { ...caseStudyRaw, id: caseStudyRaw.slug } : null;

    if (!caseStudy) return null;

    return (
        <CaseStudyModal
            isOpen={true}
            onClose={() => router.back()}
            caseStudy={caseStudy as any}
            lang={lang}
        />
    );
}
