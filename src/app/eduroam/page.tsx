import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "eduroam & Passpoint Research | David Popescu",
  description:
    "A University of North Georgia student researching Passpoint and how to set up a home network that fellow students can join automatically.",
};

export default function Eduroam() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="glow-text text-4xl md:text-5xl font-bold mb-10 text-center">eduroam &amp; Passpoint</h1>
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <p>
              Hi, I&apos;m a student at the University of North Georgia, and I&apos;m doing some
              personal research and personal projects about Passpoint technologies and how
              convenient they are, and potentially looking into finding ways to make them even
              more convenient.
            </p>
            <p>
              I would like to learn how to create and set up a Passpoint network at my own home,
              and allow fellow college students that visit to automatically and seamlessly
              connect.
            </p>
            <p>
              I&apos;ve got a Ubiquiti router that I know supports Passpoint configurations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
