import HeaderV2 from "@/components/v2/HeaderV2";
import HeroV2 from "@/components/v2/HeroV2";
import BlueprintsV2 from "@/components/v2/BlueprintsV2";
import DeepDiveV2 from "@/components/v2/DeepDiveV2";
import SelectedWork from "@/components/SelectedWork";
import FooterV2 from "@/components/v2/FooterV2";

export default function HomeV2() {
  const lang = "es";
  
  return (
    <div className="bg-surface text-on-surface min-h-screen selection:bg-secondary selection:text-white font-body selection-transparent">
      <HeaderV2 lang={lang} />

      <main className="relative pt-[12vh]">
        <HeroV2 lang={lang} />
        <BlueprintsV2 lang={lang} />
        <DeepDiveV2 lang={lang} />
      </main>

      {/* SelectedWork takes care of itself, dropping it here inside the light theme wrapper ensures it gets the correct contrast if it inherits from parent */}
      <div className="bg-surface relative z-20 pb-32">
        <SelectedWork lang={lang} />
      </div>

      <FooterV2 lang={lang} />
    </div>
  );
}
