import PageContainer from '@/components/layout/PageContainer'
import { Header } from '@/components/sections'

const Thoughts = () => {
    return (
        <PageContainer>
            {/* Header section */}
            <Header
                title="Thoughts"
                description="A selection of ideas and thoughts to inspire, learn, and create."
            />
            
            <div className="flex-1 min-h-[30vh] flex justify-center items-center">
                <p>Working on something awesome here --- check back soon!</p>
            </div>
        </PageContainer>
    )
}

export default Thoughts