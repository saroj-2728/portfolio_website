import PageContainer from "@/components/layout/PageContainer";
import { ContactHeader, ContactForm } from "@/components/sections/contact";

const ContactPage = () => {
    return (
        <PageContainer>
            {/* Header section */}
            <ContactHeader />

            {/* Form section */}
            <ContactForm />

        </PageContainer>
    )
}

export default ContactPage
