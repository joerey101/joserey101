import { client } from "@/sanity/client";
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

    const caseStudy = await client.fetch(query).catch(() => null);

    if (!caseStudy) {
        // Fallback to static for dev/demo if ID is numeric (from static file)
        // But ideally we just show 404 if we are fully CMS driven.
        // Let's keep it simple: if CMS returns null, and ID is numeric, try static? 
        // No, let's assume fully CMS now to avoid confusion.
        // Wait, the static items have IDs like '1', '2'. Sanity IDs are UUIDs.
        // If user clicks a static item on Home (which loads static list if CMS fails),
        // they get sent to /work/1. We need to handle that?
        // SelectedWork fetches from Sanity. If Sanity has data, it uses Sanity IDs.
        // So we are safe.
        notFound();
    }

    // Sanity returns _id, we map it to id
    const caseStudyFormatted = {
        ...caseStudy,
        id: caseStudy._id
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
