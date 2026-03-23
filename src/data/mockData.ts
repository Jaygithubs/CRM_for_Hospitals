import { Patient, Appointment, Doctor, Department } from '@/types';

export const patients: Patient[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    age: 34,
    gender: 'Female',
    phone: '+1 234-567-8901',
    email: 'sarah.j@email.com',
    lastVisit: '2024-03-15',
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
  },
  {
    id: 2,
    name: 'Michael Chen',
    age: 45,
    gender: 'Male',
    phone: '+1 234-567-8902',
    email: 'michael.c@email.com',
    lastVisit: '2024-03-14',
    status: 'Critical',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    age: 28,
    gender: 'Female',
    phone: '+1 234-567-8903',
    email: 'emily.r@email.com',
    lastVisit: '2024-03-13',
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
  },
  {
    id: 4,
    name: 'David Kim',
    age: 52,
    gender: 'Male',
    phone: '+1 234-567-8904',
    email: 'david.k@email.com',
    lastVisit: '2024-03-12',
    status: 'Inactive',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    age: 39,
    gender: 'Female',
    phone: '+1 234-567-8905',
    email: 'lisa.t@email.com',
    lastVisit: '2024-03-11',
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150'
  }
];

export const appointments: Appointment[] = [
  {
    id: 1,
    patientName: 'Sarah Johnson',
    doctorName: 'Dr. James Wilson',
    date: '2024-03-20',
    time: '09:00 AM',
    status: 'Scheduled',
    type: 'General Checkup'
  },
  {
    id: 2,
    patientName: 'Michael Chen',
    doctorName: 'Dr. Emily Brown',
    date: '2024-03-20',
    time: '10:30 AM',
    status: 'Scheduled',
    type: 'Cardiology'
  },
  {
    id: 3,
    patientName: 'Emily Rodriguez',
    doctorName: 'Dr. Sarah Martinez',
    date: '2024-03-19',
    time: '02:00 PM',
    status: 'Completed',
    type: 'Dermatology'
  },
  {
    id: 4,
    patientName: 'David Kim',
    doctorName: 'Dr. James Wilson',
    date: '2024-03-19',
    time: '11:00 AM',
    status: 'Completed',
    type: 'Follow-up'
  },
  {
    id: 5,
    patientName: 'Lisa Thompson',
    doctorName: 'Dr. Robert Taylor',
    date: '2024-03-21',
    time: '03:30 PM',
    status: 'Scheduled',
    type: 'Neurology'
  }
];

export const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. James Wilson',
    specialization: 'Cardiologist',
    experience: 15,
    phone: '+1 234-567-8910',
    email: 'james.wilson@hospital.com',
    available: true,
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150'
  },
  {
    id: 2,
    name: 'Dr. Emily Brown',
    specialization: 'Neurologist',
    experience: 12,
    phone: '+1 234-567-8911',
    email: 'emily.brown@hospital.com',
    available: true,
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150'
  },
  {
    id: 3,
    name: 'Dr. Sarah Martinez',
    specialization: 'Dermatologist',
    experience: 8,
    phone: '+1 234-567-8912',
    email: 'sarah.martinez@hospital.com',
    available: false,
    avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150'
  },
  {
    id: 4,
    name: 'Dr. Robert Taylor',
    specialization: 'Orthopedic',
    experience: 20,
    phone: '+1 234-567-8913',
    email: 'robert.taylor@hospital.com',
    available: true,
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150'
  }
];

export const departments: Department[] = [
  {
    id: 1,
    name: 'Cardiology',
    head: 'Dr. James Wilson',
    patients: 45,
    rooms: 12,
    status: 'Active'
  },
  {
    id: 2,
    name: 'Neurology',
    head: 'Dr. Emily Brown',
    patients: 38,
    rooms: 10,
    status: 'Active'
  },
  {
    id: 3,
    name: 'Pediatrics',
    head: 'Dr. Amanda Lee',
    patients: 52,
    rooms: 15,
    status: 'Busy'
  },
  {
    id: 4,
    name: 'Orthopedics',
    head: 'Dr. Robert Taylor',
    patients: 41,
    rooms: 12,
    status: 'Active'
  }
];

export const stats = {
  totalPatients: 1250,
  activeAppointments: 28,
  availableDoctors: 12,
  departments: 8,
  todayAppointments: 15,
  emergencyCases: 3
};