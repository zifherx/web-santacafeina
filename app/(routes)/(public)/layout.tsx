import { ReactNode } from "react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LeafParticles } from "@/components/shared/Leaf-Particles";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <LeafParticles />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
