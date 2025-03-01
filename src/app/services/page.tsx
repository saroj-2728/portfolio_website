import ServiceCard from "@/components/ui/ServiceCard"
import ServiceCardSkeleton from "@/components/skeletons/ServiceCardSkeleton"
import { services } from "@/constants/services"
import type { ServiceType } from "@/constants/services"

const ServicesPage = () => {
  return (
    <main className="flex flex-col items-center min-h-screen pt-10">
      <div className="max-w-[960px] w-full mx-auto">
        {/* Header section */}
        <header className="me p-12 pb-0 space-y-6">
          <h1 className="text-5xl font-bold text-primary">
            Services
          </h1>
          <p className="mt-3 text-lg max-w-xl">
            Blending creativity and functionality, our design services transform ideas into captivating realities.
          </p>
        </header>

        {/* Services */}
        <div className="flex flex-col p-12 pb-20 space-y-6">
          {
            services.map((service: ServiceType, index: number) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                details={service.details}
              />
            ))
          }
          <ServiceCardSkeleton />
        </div>

      </div>
    </main>
  )
}

export default ServicesPage
