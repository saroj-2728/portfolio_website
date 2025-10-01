import PageContainer from "@/components/layout/PageContainer";
import { ContactHeader, ContactForm } from "@/components/sections/contact";

const ContactPage = () => {
    return (
        <PageContainer
            maxWidth="md"
            spacing="sm"
        >
            {/* Header section */}
            <ContactHeader />

            {/* Form section */}
            <ContactForm />

        </PageContainer>
    )
}

export default ContactPage
