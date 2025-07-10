import heroImage from '../assets/F2.jpg';

export default function Hero() {
  return (
    <section className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Hero background" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to Our Platform
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Discover amazing features that will revolutionize your workflow
        </p>
        <div className="space-x-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}