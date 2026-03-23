'use client';

import { departments } from '@/data/mockData';
import { Users, Bed, Activity } from 'lucide-react';

export default function DepartmentsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Departments</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Add Department
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {departments.map((department) => (
          <div key={department.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{department.name}</h3>
                <p className="text-gray-600">Head: {department.head}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                department.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {department.status}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex items-center space-x-2">
                <Users size={20} className="text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">Total Patients</p>
                  <p className="text-lg font-semibold">{department.patients}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Bed size={20} className="text-green-500" />
                <div>
                  <p className="text-sm text-gray-500">Rooms</p>
                  <p className="text-lg font-semibold">{department.rooms}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}