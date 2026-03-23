'use client';

import { doctors } from '@/data/mockData';
import { Phone, Mail, Circle, MoreVertical } from 'lucide-react';
import Image from 'next/image';

export default function DoctorsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Doctors</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Add New Doctor
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={doctor.avatar}
                      alt={doctor.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{doctor.name}</h3>
                    <p className="text-blue-600 text-sm">{doctor.specialization}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical size={20} />
                </button>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-600">
                  <Mail size={16} className="mr-2" />
                  <span className="text-sm">{doctor.email}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone size={16} className="mr-2" />
                  <span className="text-sm">{doctor.phone}</span>
                </div>
                <div className="flex items-center">
                  <Circle size={12} className={`mr-2 ${doctor.available ? 'text-green-500' : 'text-red-500'}`} />
                  <span className="text-sm text-gray-600">
                    {doctor.available ? 'Available' : 'Not Available'}
                  </span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-500">{doctor.experience} years of experience</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}