import SectionHero from "@/components/SectionHero";
import SectionServices from "@/components/SectionServices";
import SectionScheduling from "@/components/SectionScheduling";
import SectionCustomers from "@/components/SectionCustomers";
import SectionBudgets from "@/components/SectionBudgets";
import SectionPlans from "@/components/SectionPlans";
import SectionBuyNow from "@/components/SectionBuyNow";

export default function Page() {
  return (
    <>
      <SectionHero />
      <SectionServices />
      <SectionScheduling />
      <SectionCustomers />
      <SectionBudgets />
      <SectionPlans />
      <SectionBuyNow />
    </>
  )
}
