"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import botoxImage from "../public/Botox & Fillers.avif";
import laserImage from "../public/Laser Treatments.avif";
import threadImage from "../public/Thread Lifts.webp";
import skinImage from "../public/Skin Boosters.webp";

const treatments = [
  {
    title: "Botox & Fillers",
    description:
      "Precision injections for wrinkle reduction and facial enhancement.",
    image: botoxImage,
    color: "from-purple-200 via-purple-100 to-white",
    link: "/services#botox-fillers",
  },
  {
    title: "Laser Treatments",
    description:
      "Advanced laser tech for glowing, youthful skin and pigmentation removal.",
    image: laserImage,
    color: "from-blue-200 via-blue-100 to-white",
    link: "/services#laser-treatments",
  },
  {
    title: "Thread Lifts",
    description:
      "Non-surgical facelift using bio-stimulating threads for instant lift.",
    image: threadImage,
    color: "from-pink-200 via-pink-100 to-white",
    link: "/services#thread-lifts",
  },
  {
    title: "Skin Boosters",
    description:
      "Deep hydration therapy to revive dull skin from within naturally.",
    image: skinImage,
    color: "from-teal-200 via-teal-100 to-white",
    link: "/services#skin-boosters",
  },
];

const TreatmentBoxes = () => {
  return (
    <div className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-center text-gray-800 mb-16"
      >
        Our <span className="text-rose-600 norican-regular">Signature</span>{" "}
        Treatments
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {treatments.map((treatment, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.04,
              transition: { type: "spring", stiffness: 200 },
            }}
            className={`bg-gradient-to-br ${treatment.color} rounded-2xl shadow-lg overflow-hidden transition-all duration-300 flex flex-col`}
          >
            <Link href={treatment.link}>
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>

            <div className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {treatment.title}
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {treatment.description}
              </p>

              <Link href={treatment.link}>
                <motion.button
                  whileHover={{
                    x: 6,
                    backgroundColor: "#e11d48",
                    color: "white",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto w-fit px-5 py-2 rounded-full bg-white border border-rose-500 text-rose-600 font-medium flex items-center gap-1 transition-colors shadow hover:shadow-md"
                >
                  Explore
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentBoxes;

