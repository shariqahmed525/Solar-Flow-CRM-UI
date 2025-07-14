import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Zap, 
  Users, 
  Sun,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from 'recharts';
import { mockKPIs, monthlyRevenueData, projectStatusData, leadSourceData } from '../data/mockData';
import { useTheme } from '../contexts/ThemeContext';

const iconMap = {
  DollarSign,
  Zap,
  Users,
  Sun
};

const Dashboard: React.FC = () => {
  const { isDarkMode } = useTheme();
  const formatCurrency = (value: number) => `$${(value / 1000000).toFixed(1)}M`;

  return (
    <div className={`p-6 space-y-6 min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockKPIs.map((kpi, index) => {
          const Icon = iconMap[kpi.icon as keyof typeof iconMap];
          return (
            <div 
              key={index} 
              className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{kpi.title}</p>
                  <p className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mt-2`}>{kpi.value}</p>
                </div>
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                {kpi.trend === 'up' ? (
                  <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-red-500" />
                )}
                <span className={`text-sm font-medium ml-1 ${
                  kpi.trend === 'up' ? 'text-emerald-500' : 'text-red-500'
                }`}>
                  {Math.abs(kpi.change)}%
                </span>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} ml-1`}>vs last month</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} p-6 hover:shadow-lg transition-all duration-300`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Monthly Revenue</h3>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-emerald-500" />
              <span className="text-sm text-emerald-500 font-medium">+12.5%</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyRevenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#f0f0f0'} />
              <XAxis dataKey="month" stroke={isDarkMode ? '#9CA3AF' : '#6b7280'} />
              <YAxis tickFormatter={formatCurrency} stroke={isDarkMode ? '#9CA3AF' : '#6b7280'} />
              <Tooltip 
                formatter={(value: number) => [formatCurrency(value), 'Revenue']}
                labelStyle={{ color: isDarkMode ? '#F3F4F6' : '#374151' }}
                contentStyle={{ 
                  backgroundColor: isDarkMode ? '#1F2937' : 'white', 
                  border: `1px solid ${isDarkMode ? '#374151' : '#d1d5db'}`,
                  borderRadius: '8px',
                  color: isDarkMode ? '#F3F4F6' : '#374151'
                }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#10B981"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Project Status Chart */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} p-6 hover:shadow-lg transition-all duration-300`}>
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Project Status Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={projectStatusData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {projectStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number) => [value, 'Projects']}
                contentStyle={{ 
                  backgroundColor: isDarkMode ? '#1F2937' : 'white', 
                  border: `1px solid ${isDarkMode ? '#374151' : '#d1d5db'}`,
                  borderRadius: '8px',
                  color: isDarkMode ? '#F3F4F6' : '#374151'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {projectStatusData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-2" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lead Sources */}
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} p-6 hover:shadow-lg transition-all duration-300`}>
        <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Lead Sources</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={leadSourceData}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#f0f0f0'} />
            <XAxis dataKey="source" stroke={isDarkMode ? '#9CA3AF' : '#6b7280'} />
            <YAxis stroke={isDarkMode ? '#9CA3AF' : '#6b7280'} />
            <Tooltip 
              formatter={(value: number) => [value, 'Leads']}
              contentStyle={{ 
                backgroundColor: isDarkMode ? '#1F2937' : 'white', 
                border: `1px solid ${isDarkMode ? '#374151' : '#d1d5db'}`,
                borderRadius: '8px',
                color: isDarkMode ? '#F3F4F6' : '#374151'
              }}
            />
            <Bar dataKey="leads" radius={[4, 4, 0, 0]}>
              {leadSourceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;