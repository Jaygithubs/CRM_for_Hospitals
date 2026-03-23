import Hero from '@/components/website/Hero';
import Services from '@/components/website/Services';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine advanced medical technology with compassionate care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-blue-600">24/7</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Emergency Care</h3>
              <p className="text-gray-600">Round-the-clock emergency services with rapid response team</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-blue-600">50+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
              <p className="text-gray-600">Highly qualified specialists across all medical fields</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-blue-600">1000+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Happy Patients</h3>
              <p className="text-gray-600">Trusted by thousands of patients for quality healthcare</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Schedule your appointment today and experience quality healthcare</p>
          <a href="/dashboard" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  );
}