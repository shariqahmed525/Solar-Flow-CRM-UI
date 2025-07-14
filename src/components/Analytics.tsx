import React from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { TrendingUp, Target, Zap, Users } from 'lucide-react';

const Analytics: React.FC = () => {
  const performanceData = [
    { month: 'Jan', revenue: 1800000, leads: 45, conversions: 12, installations: 8 },
    { month: 'Feb', revenue: 2100000, leads: 52, conversions: 15, installations: 11 },
    { month: 'Mar', revenue: 1950000, leads: 48, conversions: 13, installations: 9 },
    { month: 'Apr', revenue: 2300000, leads: 58, conversions: 18, installations: 14 },
    { month: 'May', revenue: 2650000, leads: 65, conversions: 21, installations: 17 },
    { month: 'Jun', revenue: 2400000, leads: 60, conversions: 19, installations: 15 }
  ];

  const regionalData = [
    { region: 'California', projects: 45, value: 15000000, color: '#10B981' },
    { region: 'Texas', projects: 32, value: 12000000, color: '#3B82F6' },
    { region: 'Florida', projects: 28, value: 9500000, color: '#F59E0B' },
    { region: 'Arizona', projects: 25, value: 8200000, color: '#8B5CF6' },
    { region: 'Nevada', projects: 18, value: 6100000, color: '#EF4444' }
  ];

  const conversionData = [
    { stage: 'Leads', count: 1000, color: '#3B82F6' },
    { stage: 'Qualified', count: 400, color: '#10B981' },
    { stage: 'Proposals', count: 200, color: '#F59E0B' },
    { stage: 'Negotiations', count: 120, color: '#8B5CF6' },
    { stage: 'Closed Won', count: 80, color: '#059669' }
  ];

  const formatCurrency = (value: number) => `$${(value / 1000000).toFixed(1)}M`;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Analytics & Reports</h2>
        <p className="text-gray-600 mt-1">Comprehensive business insights and performance metrics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Conversion Rate</p>
              <p className="text-2xl font-bold text-gray-900">32.5%</p>
              <p className="text-xs text-green-500 flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +5.2% vs last month
              </p>
            </div>
            <Target className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Deal Size</p>
              <p className="text-2xl font-bold text-gray-900">$425K</p>
              <p className="text-xs text-green-500 flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +8.7% vs last month
              </p>
            </div>
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold">$</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Pipeline</p>
              <p className="text-2xl font-bold text-gray-900">$8.2M</p>
              <p className="text-xs text-green-500 flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +12.3% vs last month
              </p>
            </div>
            <Zap className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Customer LTV</p>
              <p className="text-2xl font-bold text-gray-900">$1.2M</p>
              <p className="text-xs text-green-500 flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +6.4% vs last month
              </p>
            </div>
            <Users className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Performance Trends */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Revenue & Lead Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis yAxisId="left" tickFormatter={formatCurrency} stroke="#6b7280" />
              <YAxis yAxisId="right" orientation="right" stroke="#6b7280" />
              <Tooltip 
                formatter={(value: number, name: string) => [
                  name === 'revenue' ? formatCurrency(value) : value,
                  name === 'revenue' ? 'Revenue' : name.charAt(0).toUpperCase() + name.slice(1)
                ]}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #d1d5db',
                  borderRadius: '8px'
                }}
              />
              <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3} />
              <Line yAxisId="right" type="monotone" dataKey="leads" stroke="#3B82F6" strokeWidth={2} />
              <Line yAxisId="right" type="monotone" dataKey="conversions" stroke="#F59E0B" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Sales Funnel</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={conversionData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="stage" type="category" width={80} />
              <Tooltip 
                formatter={(value: number) => [value, 'Count']}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #d1d5db',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                {conversionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Regional Performance */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Regional Performance</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={regionalData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="region" />
                <YAxis />
                <Tooltip 
                  formatter={(value: number) => [value, 'Projects']}
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #d1d5db',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="projects" radius={[4, 4, 0, 0]}>
                  {regionalData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Top Performing Regions</h4>
            {regionalData.map((region, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div 
                    className="w-4 h-4 rounded-full mr-3"
                    style={{ backgroundColor: region.color }}
                  ></div>
                  <div>
                    <p className="font-medium text-gray-900">{region.region}</p>
                    <p className="text-sm text-gray-500">{region.projects} projects</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">
                    ${(region.value / 1000000).toFixed(1)}M
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;