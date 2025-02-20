import React from "react";
import SectionName from "@/components/ui/sectionName";
import Title from "@/components/ui/title";

const fees = {
    onAdmission: [
        {name: "Registration Charges", amount: "₹500"},
        {name: "Admission Fee", amount: "₹5,000"},
        {name: "Annual Collection", amount: "₹10,000"},
        {name: "Annual Charges", amount: "₹8,000"},
        {name: "Development Fees", amount: "₹5,000"},
    ],
    tuitionFee: [
        {name: "Class Prep to X", amount: "₹2,500 per month"},
        {name: "Class XI & XII", amount: "₹3,000 per month"},
    ],
    additionalFees: [
        {name: "Computer Fee (Per Month) - Class X & XII (Optional)", amount: "₹500"},
        {name: "Science Fee (Per Month - Per Subject) - Class X & XII (Physics, Chemistry, Biology)", amount: "₹300"},
    ],
};

const scholarships = [
    {name: "Merit Scholarship", criteria: "Above 90% in previous class", benefit: "25% fee waiver"},
    {name: "Sports Excellence", criteria: "National/State level achievements", benefit: "Up to 50% fee waiver"},
    {name: "Sibling Discount", criteria: "Two or more siblings", benefit: "10% discount for second child"},
    {name: "Girls Education Initiative", criteria: "All girl students", benefit: "Special fee consideration"},
];

export default function FeeAndScholarship() {
    return (
        <section className="container mx-auto py-12 px-6">
            <SectionName className="text-center text-4xl font-bold text-primary mb-10">
                Fee & Scholarship Details
            </SectionName>

            <div className="grid lg:grid-cols-2 gap-8">
                {Object.entries(fees).map(([category, items]) => (
                    <div key={category} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary">
                        <Title size="2xl" className="text-xl font-semibold mb-4 text-primary capitalize">
                            {category.replace(/([A-Z])/g, " $1")}
                        </Title>
                        <ul className="space-y-3">
                            {items.map((fee, index) => (
                                <li key={index} className="flex justify-between py-2 border-b text-gray-700">
                                    <span>{fee.name}</span>
                                    <span className="font-bold text-gray-900">{fee.amount}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-12">
                <Title size="2xl" className="text-2xl font-semibold mb-6 text-primary">
                    Scholarship Opportunities
                </Title>
                <div className="grid lg:grid-cols-2 gap-6">
                    {scholarships.map((scholarship, index) => (
                        <div key={index}
                             className="bg-primary text-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-lg font-semibold text-white">{scholarship.name}</h4>
                            <p className="mt-2 text-white"><strong>Criteria:</strong> {scholarship.criteria}</p>
                            <p className={"text-white"}><strong>Benefit:</strong> {scholarship.benefit}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-10 border-l-4 border-secondary">
                <Title size="2xl" className="text-xl font-semibold mb-4 text-secondary">
                    Important Notes:
                </Title>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>All fees are subject to revision.</li>
                    <li>Fee once paid is non-refundable.</li>
                    <li>Late fee charges applicable after the due date.</li>
                    <li>Scholarships are subject to verification of documents and approval.</li>
                </ul>
            </div>
        </section>
    );
}
