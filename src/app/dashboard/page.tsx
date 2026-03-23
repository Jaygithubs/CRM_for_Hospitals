'use client';

import { Users, Calendar, Stethoscope, Building2, TrendingUp } from 'lucide-react';
import StatsCard from '@/components/dashboard/StatsCard';
import RecentActivity from '@/components/dashboard/RecentActivity';
import { stats, appointments } from '@/data/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { month: 'Jan', patients: 120 },
  { month: 'Feb', patients: 135 },
  { month: 'Mar', patients: 148 },
  { month: 'Apr', patients: 162 },
  { month: 'May', patients: 175 },
  { month: 'Jun', patients: 190 },
];

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Patients"
          value={stats.totalPatients}
          icon={Users}
          color="bg-blue-500"
          change="+12% from last month"
        />
        <StatsCard
          title="Today's Appointments"
          value={stats.todayAppointments}
          icon={Calendar}
          color="bg-green-500"
        />
        <StatsCard
          title="Available Doctors"
          value={stats.availableDoctors}
          icon={Stethoscope}
          color="bg-purple-500"
        />
        <StatsCard
          title="Departments"
          value={stats.departments}
          icon={Building2}
          color="bg-orange-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Patient Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="patients" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <RecentActivity appointments={appointments} />
      </div>

      <div className="mt-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-md p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Emergency Cases Today</h3>
            <p className="text-3xl font-bold">{stats.emergencyCases}</p>
          </div>
          <TrendingUp size={48} className="opacity-50" />
        </div>
      </div>
    </div>
  );
}