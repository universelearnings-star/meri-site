// src/pages/Home.tsx
import { Hero } from "../components/sections/Hero";
import { TrustBar } from "../components/sections/TrustBar";
import { HowItWorks } from "../components/sections/HowItWorks";
import { WhyChoose } from "../components/sections/WhyChoose";
import { CounsellorsPreview } from "../components/sections/CounsellorsPreview";
import { VolunteersPreview } from "../components/sections/VolunteersPreview";
import { StoriesPreview } from "../components/sections/StoriesPreview";
import { ResourcesPreview } from "../components/sections/ResourcesPreview";
import { Testimonials } from "../components/sections/Testimonials";
import { FAQ } from "../components/sections/FAQ";
import { FinalCTA } from "../components/sections/FinalCTA";

export function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <HowItWorks />
      <WhyChoose />
      <CounsellorsPreview />
      <VolunteersPreview />
      <StoriesPreview />
      <ResourcesPreview />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}