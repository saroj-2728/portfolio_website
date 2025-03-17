'use client'
import { useState, useEffect } from 'react'

import ServiceCard from "@/components/ui/ServiceCard"
import ServiceCardSkeleton from "@/components/skeletons/ServiceCardSkeleton"
import type { ServiceType } from "@/constants/services"


const ServicesPage = () => {

  const [services, setServices] = useState<ServiceType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      async function fetchServices() {
        const res = await fetch('/api/services', { cache: "force-cache", next: { revalidate: 3600 } });
        const data: ServiceType[] = await res.json();
        setServices(data);
        setIsLoading(false);
      }

      fetchServices();
    }
    catch (error) {
      console.error("Error fetching services:", error);
    }
  }, []);

  return (
    <main className="flex flex-col items-center min-h-screen pt-10">
      <div className="max-w-[960px] w-full mx-auto">
        {/* Header section */}
        <header className="me p-12 pb-0 space-y-6">
          <h1 className="text-5xl font-bold text-primary">
            Services
          </h1>
          <p className="mt-3 text-lg max-w-xl">
            Explore the wide range of services I offer, designed to bring your ideas to life with innovation and expertise.
          </p>
        </header>

        {/* Services */}
        <div className="flex flex-col p-12 pb-20 space-y-6">
          {
            isLoading ? (
              Array.from({ length: 4 }).map((_, index) => (
                <ServiceCardSkeleton key={index} />
              ))
            )
              :
              services.map((service: ServiceType, index: number) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  details={service.details}
                />
              ))
          }
        </div>

      </div>
    </main>
  )
}

export default ServicesPage
