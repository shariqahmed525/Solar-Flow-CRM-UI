import React, { useState } from 'react';
import { Plus, Search, Filter, Mail, Phone, Building, TrendingUp, Edit, Trash2, Eye } from 'lucide-react';
import { mockLeads } from '../data/mockData';
import { Lead } from '../types';
import { useTheme } from '../contexts/ThemeContext';

const Leads: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [leads, setLeads] = useState<Lead[]>(mockLeads);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showNewLeadModal, setShowNewLeadModal] = useState(false);

  const statusColors = {
    'new': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    'contacted': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    'qualified': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'proposal': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    'negotiation': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
    'closed-won': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300',
    'closed-lost': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
  };

  const filteredLeads = leads.filter(lead => {
    const matchesStatus = selectedStatus === 'all' || lead.status === selectedStatus;
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const totalValue = leads.reduce((sum, lead) => sum + lead.estimatedValue, 0);

  const handleDeleteLead = (id: string) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      setLeads(leads.filter(lead => lead.id !== id));
    }
  };

  const handleStatusChange = (id: string, newStatus: string) => {
    setLeads(leads.map(lead => 
      lead.id === id ? { ...lead, status: newStatus as Lead['status'] } : lead
    ));
  };

  return (
    <div className={`p-6 min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Lead Management</h2>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>Track and manage your sales pipeline</p>
        </div>
        <button 
          onClick={() => setShowNewLeadModal(true)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <Plus className="w-4 h-4" />
          <span>New Lead</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-md transition-all duration-300 hover:-translate-y-1`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Leads</p>
              <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{leads.length}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-md transition-all duration-300 hover:-translate-y-1`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Qualified</p>
              <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {leads.filter(l => l.status === 'qualified').length}
              </p>
            </div>
            <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
              <span className="text-green-600 dark:text-green-300 font-bold">✓</span>
            </div>
          </div>
        </div>
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-md transition-all duration-300 hover:-translate-y-1`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>In Negotiation</p>
              <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {leads.filter(l => l.status === 'negotiation').length}
              </p>
            </div>
            <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
              <span className="text-orange-600 dark:text-orange-300 font-bold">⚡</span>
            </div>
          </div>
        </div>
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-md transition-all duration-300 hover:-translate-y-1`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Pipeline Value</p>
              <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                ${(totalValue / 1000000).toFixed(1)}M
              </p>
            </div>
            <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
              <span className="text-emerald-600 dark:text-emerald-300 font-bold">$</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} p-4 mb-6`}>
        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className={`w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`} />
            <input
              type="text"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`pl-10 pr-4 py-2 w-full border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' : 'border-gray-300 bg-white text-gray-900'} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300`}
            />
          </div>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className={`px-4 py-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300`}
          >
            <option value="all">All Status</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="qualified">Qualified</option>
            <option value="proposal">Proposal</option>
            <option value="negotiation">Negotiation</option>
            <option value="closed-won">Closed Won</option>
            <option value="closed-lost">Closed Lost</option>
          </select>
        </div>
      </div>

      {/* Leads List */}
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} overflow-hidden`}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <tr>
                <th className={`px-6 py-3 text-left text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Lead
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Contact
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Status
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Value
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Source
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Last Contact
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className={`${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors duration-200`}>
                  <td className="px-6 py-4">
                    <div>
                      <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{lead.name}</p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} flex items-center`}>
                        <Building className="w-4 h-4 mr-1" />
                        {lead.company}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-900'} flex items-center`}>
                        <Mail className={`w-4 h-4 mr-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`} />
                        {lead.email}
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-900'} flex items-center`}>
                        <Phone className={`w-4 h-4 mr-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`} />
                        {lead.phone}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={lead.status}
                      onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        statusColors[lead.status as keyof typeof statusColors]
                      } border-none focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                    >
                      <option value="new">NEW</option>
                      <option value="contacted">CONTACTED</option>
                      <option value="qualified">QUALIFIED</option>
                      <option value="proposal">PROPOSAL</option>
                      <option value="negotiation">NEGOTIATION</option>
                      <option value="closed-won">CLOSED WON</option>
                      <option value="closed-lost">CLOSED LOST</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      ${lead.estimatedValue.toLocaleString()}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>{lead.source}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                      {new Date(lead.lastContact).toLocaleDateString()}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-blue-600 hover:text-blue-800 hover:scale-110 transition-all duration-200">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-emerald-600 hover:text-emerald-800 hover:scale-110 transition-all duration-200">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteLead(lead.id)}
                        className="p-1 text-red-600 hover:text-red-800 hover:scale-110 transition-all duration-200"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* New Lead Modal */}
      {showNewLeadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 w-full max-w-md mx-4`}>
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Add New Lead</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Lead Name"
                className={`w-full px-3 py-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500`}
              />
              <input
                type="email"
                placeholder="Email"
                className={`w-full px-3 py-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500`}
              />
              <input
                type="tel"
                placeholder="Phone"
                className={`w-full px-3 py-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500`}
              />
              <input
                type="text"
                placeholder="Company"
                className={`w-full px-3 py-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500`}
              />
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowNewLeadModal(false)}
                className={`px-4 py-2 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'} transition-colors duration-200`}
              >
                Cancel
              </button>
              <button
                onClick={() => setShowNewLeadModal(false)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Add Lead
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leads;