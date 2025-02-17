import PageTitle from "@/components/sections/pageTitle";
import AdmissionForm from "@/app/(group1)/admission/AdmissionForm";

const AdmissionPage = () => {
    return (
        <main>
            <PageTitle pageName={"Admission"} breadcrumbCurrent={"admission"} breadcrumbLink={"/admission"}/>
            <AdmissionForm/>
        </main>
    )
}

export default AdmissionPage;