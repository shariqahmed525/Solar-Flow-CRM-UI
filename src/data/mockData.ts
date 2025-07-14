import { Lead, Customer, Project, KPI } from '../types';

export const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'Green Valley Farm',
    email: 'contact@greenvalleyfarm.com',
    phone: '+1 (555) 123-4567',
    company: 'Green Valley Farm Co.',
    status: 'qualified',
    source: 'Website',
    estimatedValue: 150000,
    createdAt: '2024-01-15',
    lastContact: '2024-01-20'
  },
  {
    id: '2',
    name: 'TechCorp Industries',
    email: 'procurement@techcorp.com',
    phone: '+1 (555) 987-6543',
    company: 'TechCorp Industries',
    status: 'proposal',
    source: 'Referral',
    estimatedValue: 500000,
    createdAt: '2024-01-10',
    lastContact: '2024-01-22'
  },
  {
    id: '3',
    name: 'Sustainable Housing Project',
    email: 'info@sustainablehousing.org',
    phone: '+1 (555) 456-7890',
    company: 'Community Development Corp',
    status: 'negotiation',
    source: 'Trade Show',
    estimatedValue: 750000,
    createdAt: '2024-01-05',
    lastContact: '2024-01-21'
  }
];

export const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'EcoTech Manufacturing',
    email: 'facilities@ecotech.com',
    phone: '+1 (555) 111-2222',
    company: 'EcoTech Manufacturing',
    address: '123 Industrial Blvd, Green City, CA 90210',
    totalProjects: 3,
    totalValue: 1200000,
    joinedAt: '2023-06-15',
    status: 'active'
  },
  {
    id: '2',
    name: 'Sunrise Dairy Farm',
    email: 'owner@sunrisedairy.com',
    phone: '+1 (555) 333-4444',
    company: 'Sunrise Dairy Farm',
    address: '456 Farm Road, Rural Valley, CA 90211',
    totalProjects: 2,
    totalValue: 450000,
    joinedAt: '2023-08-20',
    status: 'active'
  }
];

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'EcoTech Rooftop Solar Array',
    customer: 'EcoTech Manufacturing',
    type: 'commercial',
    status: 'installation',
    capacity: 500,
    value: 800000,
    startDate: '2024-01-15',
    progress: 75,
    location: 'Green City, CA'
  },
  {
    id: '2',
    name: 'Sunrise Dairy Solar Farm',
    customer: 'Sunrise Dairy Farm',
    type: 'industrial',
    status: 'completed',
    capacity: 250,
    value: 350000,
    startDate: '2023-10-01',
    completionDate: '2023-12-15',
    progress: 100,
    location: 'Rural Valley, CA'
  },
  {
    id: '3',
    name: 'Community Solar Garden',
    customer: 'Community Development Corp',
    type: 'community',
    status: 'design',
    capacity: 1000,
    value: 1500000,
    startDate: '2024-02-01',
    progress: 25,
    location: 'Renewable Heights, CA'
  }
];

export const mockKPIs: KPI[] = [
  {
    title: 'Monthly Revenue',
    value: '$2.4M',
    change: 12.5,
    trend: 'up',
    icon: 'DollarSign'
  },
  {
    title: 'Active Projects',
    value: '24',
    change: 8.2,
    trend: 'up',
    icon: 'Zap'
  },
  {
    title: 'New Leads',
    value: '186',
    change: -3.1,
    trend: 'down',
    icon: 'Users'
  },
  {
    title: 'System Capacity',
    value: '15.2 MW',
    change: 15.8,
    trend: 'up',
    icon: 'Sun'
  }
];

export const monthlyRevenueData = [
  { month: 'Jan', revenue: 1800000, installations: 12 },
  { month: 'Feb', revenue: 2100000, installations: 15 },
  { month: 'Mar', revenue: 1950000, installations: 13 },
  { month: 'Apr', revenue: 2300000, installations: 18 },
  { month: 'May', revenue: 2650000, installations: 21 },
  { month: 'Jun', revenue: 2400000, installations: 19 }
];

export const projectStatusData = [
  { name: 'Planning', value: 3, color: '#F59E0B' },
  { name: 'Design', value: 5, color: '#3B82F6' },
  { name: 'Approved', value: 8, color: '#8B5CF6' },
  { name: 'Installation', value: 6, color: '#EF4444' },
  { name: 'Completed', value: 12, color: '#10B981' }
];

export const leadSourceData = [
  { source: 'Website', leads: 45, color: '#10B981' },
  { source: 'Referral', leads: 32, color: '#3B82F6' },
  { source: 'Trade Shows', leads: 28, color: '#F59E0B' },
  { source: 'Social Media', leads: 21, color: '#8B5CF6' },
  { source: 'Cold Outreach', leads: 15, color: '#EF4444' }
];