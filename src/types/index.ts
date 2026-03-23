export interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  phone: string;
  email: string;
  lastVisit: string;
  status: 'Active' | 'Inactive' | 'Critical';
  avatar: string;
}

export interface Appointment {
  id: number;
  patientName: string;
  doctorName: string;
  date: string;
  time: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
  type: string;
}

export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: number;
  phone: string;
  email: string;
  available: boolean;
  avatar: string;
}

export interface Department {
  id: number;
  name: string;
  head: string;
  patients: number;
  rooms: number;
  status: 'Active' | 'Busy';
}