import { content } from '@/app/content';
import CaseStudySystemV2 from './CaseStudySystemV2';

interface SelectedWorkProps {
    lang: "es" | "en";
}

export default function SelectedWork({ lang }: SelectedWorkProps) {
    const cases = content[lang].selectedWork.items;

    if (!cases || cases.length === 0) return null;

    return (
        <section id="work" className="relative">
            <div className="px-6 lg:px-12 py-20 border-b border-grid-line bg-background-light">
                <div className="flex flex-col md:flex-row gap-8 items-end justify-between max-w-[1400px] mx-auto">
                    <h2 className="font-display font-black text-[12vw] md:text-[8rem] leading-[0.85] tracking-[-0.05em] uppercase text-carbon">
                        Selected<br /><span className="text-stroke-carbon text-transparent">Work</span>
                    </h2>
                </div>
            </div>

            <div className="-mt-12">
                {/* Negative margin to pull grid closer if needed, adjusting visual hierarchy */}
                <CaseStudySystemV2 initialCases={cases} lang={lang} />
            </div>
        </section>
    );
}
