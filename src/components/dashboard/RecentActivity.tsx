import { Appointment } from '@/types';

interface RecentActivityProps {
  appointments: Appointment[];
}

export default function RecentActivity({ appointments }: RecentActivityProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Appointments</h2>
      <div className="space-y-3">
        {appointments.slice(0, 5).map((appointment) => (
          <div key={appointment.id} className="flex items-center justify-between py-2 border-b">
            <div>
              <p className="font-medium">{appointment.patientName}</p>
              <p className="text-sm text-gray-500">{appointment.doctorName}</p>
            </div>
            <div className="text-right">
              <p className="text-sm">{appointment.date}</p>
              <p className="text-xs text-gray-500">{appointment.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}