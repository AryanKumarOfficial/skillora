import Image from "next/image";
import {galleryData} from "./galleryData";
import SectionName from "@/components/ui/sectionName";
import SectionDescription from "@/components/ui/sectionDescription"; // Adjust import path

export default function SchoolAtGlance() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Page Title & Intro */}
            <SectionName className="text-center mb-12 text-xl lg:text-4xl">
                Discover Our Campus
            </SectionName>

            {/* Dynamic Grid Layout */}
            <div
                className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-4
          auto-rows-[200px]
        "
            >
                {galleryData.map((item) => {
                    const rowSpanClass =
                        item.size === "large" ? "row-span-2" : "row-span-1";

                    return (
                        <div
                            key={item.id}
                            className={`relative w-full h-full overflow-hidden rounded-lg shadow-md group ${rowSpanClass}`}
                        >
                            {/* Image with blur on hover */}
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover transition-all duration-300 group-hover:blur-sm"
                                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       25vw"
                            />

                            {/* Hover Overlay Text (no background) */}
                            <div
                                className="
                  absolute inset-0
                  flex flex-col
                  justify-center
                  items-center
                  px-4
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  cursor-pointer
                  z-10
                "
                            >
                                <h3 className="text-lg font-semibold mb-1 text-white drop-shadow">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-center text-white drop-shadow">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Optional CTA */}
            <div
                className="relative text-center mt-12 p-8 rounded-lg shadow-lg bg-gradient-to-r from-warm to-cream-foreground">
                <h2 className="text-2xl font-bold text-muted mb-2">Ready to See More?</h2>
                <p className="text-muted mb-6">
                    Explore our programs, faculty, and admission details to find out how we can
                    shape your future.
                </p>
                <a
                    href="/admissions"
                    className="inline-block bg-secondary text-cream-foreground font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                    Visit Admissions
                </a>
            </div>

        </div>
    );
}
