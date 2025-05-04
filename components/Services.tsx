// components/Services.js
import { motion } from 'framer-motion';

const services = [
  {
    title: "Botox & Fillers",
    description: "Precision injections for wrinkle reduction and facial volumizing",
    icon: "💉"
  },
  {
    title: "Laser Treatments",
    description: "Advanced laser technology for skin rejuvenation",
    icon: "✨"
  },
  {
    title: "Thread Lifts",
    description: "Non-surgical facelift with immediate results",
    icon: "🧵"
  },
  {
    title: "Skin Boosters",
    description: "Hydration and glow restoration treatments",
    icon: "💦"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Signature Treatments</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cutting-edge aesthetic procedures performed by experts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;