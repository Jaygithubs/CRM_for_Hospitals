import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 pt-24 pb-16">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Health, Our Priority
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Providing exceptional healthcare services with compassion, innovation, and excellence. 
            Your well-being is our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="#services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}