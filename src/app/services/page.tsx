'use client'
import { useState, useEffect } from 'react'
import { motion } from "framer-motion";

import ServiceCard from "@/components/cards/ServiceCard"
import ServiceCardSkeleton from "@/components/skeletons/ServiceCardSkeleton"
import type { ServiceType } from "@/constants/services"
import { useScrollAnimation, fadeUpVariants, slideLeftVariants, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";


const ServicesPage = () => {

  const [services, setServices] = useState<ServiceType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const heroAnimation = useScrollAnimation({ threshold: 0.3, triggerOnce: false, bidirectional: true });
  const servicesAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, bidirectional: true });

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
        <motion.header
          ref={heroAnimation.ref}
          className="me md:p-12 md:pb-0 pb-12 space-y-6"
          initial="hidden"
          animate={heroAnimation.controls}
          variants={fadeUpVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-primary"
            variants={slideLeftVariants}
            transition={{ delay: 0.1 }}
          >
            Services
          </motion.h1>
          <motion.p
            className="mt-3 text-lg max-w-xl"
            variants={fadeUpVariants}
            transition={{ delay: 0.2 }}
          >
            Explore the wide range of services I offer, designed to bring your ideas to life with innovation and expertise.
          </motion.p>
        </motion.header>

        {/* Services */}
        <motion.div
          ref={servicesAnimation.ref}
          className="flex flex-col md:p-12 pb-20 space-y-6"
          initial="hidden"
          animate={servicesAnimation.controls}
          variants={staggerContainer}
        >
          {
            isLoading ? (
              Array.from({ length: 4 }).map((_, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                >
                  <ServiceCardSkeleton />
                </motion.div>
              ))
            )
              :
              services.map((service: ServiceType, index: number) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    details={service.details}
                  />
                </motion.div>
              ))
          }
        </motion.div>

      </div>
    </main>
  )
}

export default ServicesPage
