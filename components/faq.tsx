"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What aesthetic treatments do you offer?",
      answer:
        "We offer a wide range of FDA-approved aesthetic treatments including Botox, fillers, laser hair removal, skin rejuvenation, body contouring, PRP therapy, and non-surgical facelifts tailored to your individual goals.",
    },
    {
      question: "Are the procedures safe?",
      answer:
        "Yes, all our procedures are conducted by certified professionals using clinically proven and FDA-approved equipment and products. We prioritize your safety and comfort at every step.",
    },
    {
      question: "How long do results last?",
      answer:
        "It depends on the treatment. For example, Botox may last 3–6 months, dermal fillers 6–18 months, and skin treatments can vary based on lifestyle and skincare habits. Maintenance sessions help prolong results.",
    },
    {
      question: "Is there any downtime after treatments?",
      answer:
        "Most of our treatments are non-invasive with minimal to no downtime. You may experience mild redness or swelling which usually subsides within a few hours to a couple of days.",
    },
    {
      question: "Do you offer free consultations?",
      answer:
        "Yes, we offer free aesthetic consultations to assess your needs and recommend personalized treatment plans. Call or message us to book your consultation.",
    },
    {
      question: "Are aesthetic treatments painful?",
      answer:
        "Most treatments are well-tolerated and cause minimal discomfort. We use numbing agents where necessary to ensure a pleasant and comfortable experience.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Aesthetic Clinic <span className="text-rose-600">FAQs</span>
          </h1>
          <p className="text-lg text-gray-600">
            Discover everything you need to know about our aesthetic services, from procedures and safety to results and aftercare.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  className="text-pink-600 text-xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 bg-gray-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
