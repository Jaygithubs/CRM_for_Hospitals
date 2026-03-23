'use client';

import { appointments } from '@/data/mockData';
import { Calendar, Clock, CheckCircle, XCircle } from 'lucide-react';

export default function AppointmentsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Appointments</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Schedule Appointment
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{appointment.patientName}</h3>
                <p className="text-gray-600">with {appointment.doctorName}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center text-gray-500">
                    <Calendar size={16} className="mr-1" />
                    <span className="text-sm">{appointment.date}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock size={16} className="mr-1" />
                    <span className="text-sm">{appointment.time}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">Type: {appointment.type}</p>
              </div>
              <div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  appointment.status === 'Scheduled' ? 'bg-yellow-100 text-yellow-800' :
                  appointment.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {appointment.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}