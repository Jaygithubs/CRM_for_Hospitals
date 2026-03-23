import { Stethoscope, Heart, Brain, Bone, Activity, Baby } from 'lucide-react';

const services = [
  {
    icon: Heart,
    name: 'Cardiology',
    description: 'Expert heart care with advanced diagnostic and treatment options',
    color: 'bg-red-100 text-red-600'
  },
  {
    icon: Brain,
    name: 'Neurology',
    description: 'Comprehensive care for nervous system disorders',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Stethoscope,
    name: 'General Medicine',
    description: 'Primary care for all your health concerns',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Bone,
    name: 'Orthopedics',
    description: 'Specialized care for bones, joints, and muscles',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Activity,
    name: 'Emergency Care',
    description: '24/7 emergency services with rapid response',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: Baby,
    name: 'Pediatrics',
    description: 'Specialized healthcare for children',
    color: 'bg-pink-100 text-pink-600'
  }
];

export default function Services() {
  return (
    <div id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare services delivered by expert medical professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className={`inline-flex p-3 rounded-lg ${service.color} mb-4`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}