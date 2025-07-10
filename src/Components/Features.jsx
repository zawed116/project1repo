import feature1 from '../assets/F1.jpg';
import feature2 from '../assets/F2.jpg';
import feature3 from '../assets/F3.avif';

const features = [
  {
    image: feature1,
    title: "Lightning Fast",
    description: "Optimized for maximum performance"
  },
  {
    image: feature2,
    title: "Secure by Default", 
    description: "Enterprise-grade security"
  },
  {
    image: feature3,
    title: "Modular Design",
    description: "Easy to customize components"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-48 overflow-hidden">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}