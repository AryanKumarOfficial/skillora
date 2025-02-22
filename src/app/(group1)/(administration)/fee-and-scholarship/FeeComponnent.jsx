import SectionName from "@/components/ui/sectionName";
import SectionDescription from "@/components/ui/sectionDescription";
import Title from "@/components/ui/title";

export default function FeeAndScholarship() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Page Title */}
            <SectionName className="text-center mb-12 text-xl lg:text-4xl">
                Fees &amp; Scholarships
            </SectionName>

            {/* Fee Structure Section */}
            <div className="mb-16">
                <SectionDescription>
                    <Title size={"2xl"} className="font-semibold mb-4">Fee Structure</Title>
                    <p className="text-gray-700">
                        We offer a transparent and structured fee system for all academic
                        programs.
                    </p>
                </SectionDescription>

                {/* Responsive Table Container */}
                <div className="mt-6 rounded-lg overflow-hidden shadow bg-white">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead className="bg-warm text-primary">
                            <tr>
                                <th className="px-4 py-2 text-left font-semibold">
                                    Program
                                </th>
                                <th className="px-4 py-2 text-left font-semibold">
                                    Annual Fee
                                </th>
                                <th className="px-4 py-2 text-left font-semibold">
                                    Additional Charges
                                </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            <tr className="odd:bg-white even:bg-gray-50">
                                <td className="px-4 py-3">High School</td>
                                <td className="px-4 py-3">₹50,000</td>
                                <td className="px-4 py-3">₹5,000 (Lab &amp; Activities)</td>
                            </tr>
                            <tr className="odd:bg-white even:bg-gray-50">
                                <td className="px-4 py-3">Senior Secondary</td>
                                <td className="px-4 py-3">₹60,000</td>
                                <td className="px-4 py-3">₹7,000 (Lab &amp; Activities)</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Scholarship Section */}
            <div>
                <SectionDescription>
                    <Title size={"2xl"} className="text-2xl font-semibold mb-4">Scholarships</Title>
                    <p className="text-gray-700">
                        We believe in rewarding academic excellence and providing financial
                        assistance to deserving students.
                    </p>
                </SectionDescription>

                {/* Scholarship Cards */}
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                    {/* Card 1 */}
                    <div className="p-6 bg-gradient-to-br from-cream-foreground to-warm rounded-lg shadow hover:shadow-lg transition-shadow">
                        <h3 className="text-lg font-semibold">Merit-Based Scholarship</h3>
                        <p className="text-gray-700 mt-2">
                            Awarded to students who achieve 90% and above in their previous
                            academic year.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 bg-gradient-to-br from-cream-foreground to-warm rounded-lg shadow hover:shadow-lg transition-shadow">
                        <h3 className="text-lg font-semibold">Financial Aid Scholarship</h3>
                        <p className="text-gray-700 mt-2">
                            Available for students from economically weaker sections to
                            support their education.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
