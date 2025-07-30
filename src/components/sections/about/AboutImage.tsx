'use client'
import { motion } from "framer-motion";
import Image from "next/image"
import { useScrollAnimation, scaleVariants } from "@/hooks/useScrollAnimation";

const AboutImage = () => {
    const imageAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, bidirectional: true });

    return (
        <motion.div
            ref={imageAnimation.ref}
            className="flex justify-start items-center"
            initial="hidden"
            animate={imageAnimation.controls}
            variants={scaleVariants}
        >
            <div className="image h-full w-full">
                <Image
                    src="https://res.cloudinary.com/djfns59te/image/upload/v1745613321/IMG_6813_1_1_i1kmwm.jpg"
                    alt="About Me"
                    width={500}
                    height={500}
                    priority={true}
                    className="object-cover rounded-lg h-full w-full"
                />
            </div>
        </motion.div>
    )
}

export default AboutImage