import { client } from "@/sanity/client";
import CaseStudySystem from "@/components/CaseStudySystem";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function WorkIndex({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
    const { lang: queryLang } = await searchParams;
    const lang = queryLang === 'en' ? 'en' : 'es';

    // Fetch all cases ordered by Tier (Importance)
    const query = `*[_type == "caseStudy"] | order(tier desc, _createdAt desc) {
    _id,
    title,
    subtitle,
    "slug": slug.current,
    tier,
    tagDisplay,
    tag,
    color,
    "imgUrl": mainImage.asset->url,
    keyMetrics,
    techStack,
    challenge,
    solution,
    impact,
    "gallery": gallery[].asset->url
  }`;

    const cases = await client.fetch(query);

    return (
        <>
            <Header lang={lang} />
            <main className="pt-24 min-h-screen bg-background-light">
                <div className="px-6 lg:px-12 py-12 max-w-[1400px] mx-auto">
                    <h1 className="font-display font-black text-6xl md:text-9xl uppercase text-carbon leading-[0.85] mb-12">
                        Selected<br /><span className="text-stroke-carbon text-transparent">Work</span>
                    </h1>
                </div>

                <CaseStudySystem initialCases={cases} lang={lang} />
            </main>
            <Footer lang={lang} />
        </>
    );
}
