import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Download} from 'lucide-react';
import PageTitle from "@/components/sections/pageTitle";
import SectionName from "@/components/ui/sectionName";

export default function TCSample() {
    return (
        <main>
            <PageTitle pageName={"Transfer Certificate Sample"} breadcrumbCurrent={"Transfer Certificate Sample"}
                       breadcrumbLink={"/tc-sample"}/>
            <div className="min-h-screen flex flex-col items-center justify-center px-6">
                <SectionName className="text-3xl font-bold mb-4 my-10">Sample Transfer Certificate (TC)</SectionName>
                <embed
                    src="/file.pdf"
                    type="application/pdf"
                    className="w-full max-w-3xl h-[500px] border rounded-lg shadow-lg"
                />
                <div className="mt-4 flex items-center gap-4">
                    <Link target={"_blank"} href="/file.pdf" download>
                        <Button variant={"secondary"} className="flex items-center gap-2">
                            <Download size={18}/> View TC Sample
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    )
        ;
}
