import { content } from '@/app/content';
import CaseStudyHybridSystem from './CaseStudyHybridSystem';

interface SelectedWorkProps {
    lang: "es" | "en";
}

export default function SelectedWork({ lang }: SelectedWorkProps) {
    const cases = content[lang].selectedWork.items;

    if (!cases || cases.length === 0) return null;

    return (
        <section id="work" className="relative w-full">
            <CaseStudyHybridSystem initialCases={cases} lang={lang} />
        </section>
    );
}
