import { getCaseStudyById } from "@/app/content";
import CaseStudyContent from "@/components/CaseStudyContent";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

// Since we are in the App Router, params is a promise
type Props = {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ lang?: string }>;
}

export default async function WorkPage({ params, searchParams }: Props) {
    const { id } = await params;
    const { lang: queryLang } = await searchParams;

    // Simple fallback logic. Ideally we'd have robust i18n routing.
    const lang = queryLang === 'en' ? 'en' : 'es';

    const caseStudy = getCaseStudyById(id, lang);

    if (!caseStudy) {
        notFound();
    }

    // Cast caseStudy to the expected type for CaseStudyContent
    // The type in content.tsx might match but let's be safe
    const caseStudyTyped: any = caseStudy;

    return (
        <>
            <Header lang={lang} />
            <main className="pt-24">
                <CaseStudyContent caseStudy={caseStudyTyped} lang={lang} />
            </main>
            <Footer lang={lang} />
        </>
    );
}
