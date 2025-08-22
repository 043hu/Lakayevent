import Category from "@/components/category";
import CTA from "@/components/cta";
import Evenement from "@/components/evenements";
import FAQ from "@/components/FAQ";
import Fonctionnality from "@/components/fonctionnalyter";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Decouverte from "@/components/top-decouverte";
import AppMobile from "@/components/AppMobile"

export default function Home() {
  return (
    <div>
      <Header />
      <Decouverte />
      <Evenement />
      <Category/>
      <Fonctionnality />
      <CTA/>
      <FAQ/>
      <AppMobile/>
      <Footer />
    </div>
  );
}
