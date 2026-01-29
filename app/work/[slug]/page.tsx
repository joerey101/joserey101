import { getCaseStudyBySlug } from "@/app/content";
import CaseStudyContent from "@/components/CaseStudyContent";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

// Next.js 15 requires params to be a Promise
type Props = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ lang?: string }>;
}

export default async function WorkPage({ params, searchParams }: Props) {
    const { slug } = await params;
    const { lang: queryLang } = await searchParams;

    const lang = queryLang === 'en' ? 'en' : 'es';

    const caseStudy = getCaseStudyBySlug(slug, lang);

    if (!caseStudy) {
        notFound();
    }

    const caseStudyFormatted = {
        ...caseStudy,
        id: caseStudy.slug // Use slug as ID
    };

    return (
        <>
            <Header lang={lang} />
            <main className="pt-24">
                <CaseStudyContent caseStudy={caseStudyFormatted} lang={lang} />
            </main>
            <Footer lang={lang} />
        </>
    );
}
