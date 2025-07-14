export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'negotiation' | 'closed-won' | 'closed-lost';
  source: string;
  estimatedValue: number;
  createdAt: string;
  lastContact: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  totalProjects: number;
  totalValue: number;
  joinedAt: string;
  status: 'active' | 'inactive';
}

export interface Project {
  id: string;
  name: string;
  customer: string;
  type: 'residential' | 'commercial' | 'industrial' | 'community';
  status: 'planning' | 'design' | 'approved' | 'installation' | 'completed' | 'maintenance';
  capacity: number; // kW
  value: number;
  startDate: string;
  completionDate?: string;
  progress: number;
  location: string;
}

export interface KPI {
  title: string;
  value: string;
  change: number;
  trend: 'up' | 'down';
  icon: string;
}