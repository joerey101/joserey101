"use client";

import { use, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getCaseStudyBySlug } from "@/app/content";
import dynamic from 'next/dynamic';
const CaseStudyModal = dynamic(() => import('@/components/CaseStudyModal'), { ssr: false });

function ModalContent({ slug }: { slug: string }) {
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

export default function InterceptedWorkPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);

    return (
        <Suspense fallback={<div className="animate-pulse flex items-center justify-center min-h-screen bg-black/50 text-white">Cargando...</div>}>
            <ModalContent slug={slug} />
        </Suspense>
    );
}
