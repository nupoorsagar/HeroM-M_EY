import React, { useState } from 'react';
import { Calendar, AlertTriangle, TrendingUp, Users, Wrench, Package, Clock, CheckCircle, XCircle, MessageSquare, BarChart3, PieChart, Settings } from 'lucide-react';

const ServiceDashboard = () => {
  const [activeView, setActiveView] = useState('service');
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Service Center View
  const ServiceCenterDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Wrench className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">AutoCare Service Center</h1>
              <p className="text-sm text-gray-500">Downtown Service Hub - Bay Status: 8/12 Active</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Mike Johnson</p>
              <p className="text-xs text-gray-500">Service Manager</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-semibold">MJ</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-4">
          <nav className="space-y-2">
            <button className="w-full flex items-center space-x-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">Appointments</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <AlertTriangle className="w-5 h-5" />
              <span>AI Predictions</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Package className="w-5 h-5" />
              <span>Parts Inventory</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Users className="w-5 h-5" />
              <span>Technicians</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <BarChart3 className="w-5 h-5" />
              <span>Analytics</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Stats Overview */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Today's Appointments</span>
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">24</p>
              <p className="text-xs text-green-600">↑ 15% vs yesterday</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">AI Predictions</span>
                <AlertTriangle className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">7</p>
              <p className="text-xs text-orange-600">3 Critical</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Bay Utilization</span>
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">67%</p>
              <p className="text-xs text-green-600">Optimal range</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Avg Service Time</span>
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">42min</p>
              <p className="text-xs text-green-600">↓ 23% with AI</p>
            </div>
          </div>

          {/* Appointment Schedule */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Today's Schedule</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded">Today</button>
                <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded">Tomorrow</button>
                <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded">Week</button>
              </div>
            </div>

            {/* Time Slots */}
            <div className="space-y-3">
              {[
                { time: '09:00 AM', customer: 'Sarah Mitchell', vehicle: '2022 Honda Civic', issue: 'Battery Replacement', priority: 'high', status: 'in-progress', bay: '3', tech: 'John D.' },
                { time: '10:30 AM', customer: 'Robert Chen', vehicle: '2021 Toyota Camry', issue: 'Brake Inspection', priority: 'medium', status: 'scheduled', bay: '5', tech: 'Maria S.' },
                { time: '02:00 PM', customer: 'Emily Davis', vehicle: '2023 Ford Explorer', issue: 'Oil Change + Filter', priority: 'low', status: 'scheduled', bay: 'TBD', tech: 'Auto-assign' },
                { time: '03:30 PM', customer: 'James Wilson', vehicle: '2020 BMW X5', issue: 'Transmission Check (AI Alert)', priority: 'critical', status: 'scheduled', bay: '1', tech: 'Senior: Mike R.' },
              ].map((apt, idx) => (
                <div 
                  key={idx} 
                  className={`border-l-4 ${
                    apt.priority === 'critical' ? 'border-red-500 bg-red-50' : 
                    apt.priority === 'high' ? 'border-orange-500 bg-orange-50' :
                    apt.priority === 'medium' ? 'border-yellow-500 bg-yellow-50' :
                    'border-green-500 bg-green-50'
                  } p-4 rounded-r cursor-pointer hover:shadow-md transition-shadow`}
                  onClick={() => setSelectedAppointment(apt)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm font-medium text-gray-500">{apt.time}</span>
                        <span className="text-base font-bold text-gray-900">{apt.customer}</span>
                        {apt.status === 'in-progress' && (
                          <span className="px-2 py-1 text-xs bg-blue-600 text-white rounded-full">In Progress</span>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <p className="text-gray-700"><span className="font-medium">Vehicle:</span> {apt.vehicle}</p>
                        <p className="text-gray-700"><span className="font-medium">Bay:</span> {apt.bay}</p>
                        <p className="text-gray-700"><span className="font-medium">Issue:</span> {apt.issue}</p>
                        <p className="text-gray-700"><span className="font-medium">Tech:</span> {apt.tech}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        apt.priority === 'critical' ? 'bg-red-100 text-red-700' :
                        apt.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                        apt.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {apt.priority.toUpperCase()}
                      </span>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View Details →</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Predictions Panel */}
          <div className="mt-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
              <h3 className="text-lg font-bold text-gray-900">Upcoming AI Predictions</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded p-3 border border-orange-200">
                <p className="text-xs text-gray-500 mb-1">Customer: Lisa Parker</p>
                <p className="text-sm font-medium text-gray-900">2021 Tesla Model 3</p>
                <p className="text-xs text-orange-600 mt-2">Predicted: Tire wear (87% confidence) - Contact in 3 days</p>
              </div>
              <div className="bg-white rounded p-3 border border-orange-200">
                <p className="text-xs text-gray-500 mb-1">Customer: David Lee</p>
                <p className="text-sm font-medium text-gray-900">2020 Mercedes C-Class</p>
                <p className="text-xs text-orange-600 mt-2">Predicted: Coolant system (92% confidence) - Contact today</p>
              </div>
              <div className="bg-white rounded p-3 border border-orange-200">
                <p className="text-xs text-gray-500 mb-1">Customer: Anna Thompson</p>
                <p className="text-sm font-medium text-gray-900">2019 Audi A4</p>
                <p className="text-xs text-orange-600 mt-2">Predicted: Suspension (78% confidence) - Contact in 5 days</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );

  // OEM Dashboard View
  const OEMDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Honda Quality Intelligence</h1>
              <p className="text-sm text-gray-500">Manufacturing & Warranty Analytics</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Export Report
            </button>
            <Settings className="w-6 h-6 text-gray-400 cursor-pointer" />
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-4">
          <nav className="space-y-2">
            <button className="w-full flex items-center space-x-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg">
              <BarChart3 className="w-5 h-5" />
              <span className="font-medium">Quality Overview</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <AlertTriangle className="w-5 h-5" />
              <span>Early Warnings</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <TrendingUp className="w-5 h-5" />
              <span>Warranty Analytics</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Package className="w-5 h-5" />
              <span>Supplier Scorecards</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <PieChart className="w-5 h-5" />
              <span>Fleet Health</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Executive KPIs */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <p className="text-xs text-gray-500 mb-1">Fleet Health Score</p>
              <p className="text-3xl font-bold text-green-600">94.2</p>
              <p className="text-xs text-green-600">↑ 2.1 vs last month</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <p className="text-xs text-gray-500 mb-1">Active Vehicles</p>
              <p className="text-3xl font-bold text-gray-900">487K</p>
              <p className="text-xs text-gray-600">Connected models</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <p className="text-xs text-gray-500 mb-1">Recall Risk Index</p>
              <p className="text-3xl font-bold text-yellow-600">Low</p>
              <p className="text-xs text-gray-600">0 critical alerts</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <p className="text-xs text-gray-500 mb-1">Warranty Costs (YTD)</p>
              <p className="text-3xl font-bold text-gray-900">$42M</p>
              <p className="text-xs text-green-600">↓ 18% vs forecast</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <p className="text-xs text-gray-500 mb-1">AI Accuracy</p>
              <p className="text-3xl font-bold text-blue-600">91.8%</p>
              <p className="text-xs text-blue-600">Prediction validation</p>
            </div>
          </div>

          {/* Critical Alerts */}
          <div className="bg-red-50 rounded-lg border-2 border-red-200 p-6 mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-7 h-7 text-red-600" />
              <div>
                <h3 className="text-lg font-bold text-red-900">Critical Quality Alert</h3>
                <p className="text-sm text-red-700">Requires immediate attention</p>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-red-200 p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-base font-bold text-gray-900 mb-2">Battery Batch #BT-2019-Q3 Anomaly Detected</p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <p><span className="font-medium text-gray-700">Affected Vehicles:</span> 12,847 units</p>
                    <p><span className="font-medium text-gray-700">Failure Rate:</span> 15% above baseline</p>
                    <p><span className="font-medium text-gray-700">Models:</span> 2020-2021 Civic, Accord</p>
                    <p><span className="font-medium text-gray-700">Supplier:</span> Supplier-A (East Plant)</p>
                    <p><span className="font-medium text-gray-700">Detection Time:</span> 14 days (vs 120 days traditional)</p>
                    <p><span className="font-medium text-gray-700">Estimated Impact:</span> $3.2M warranty exposure</p>
                  </div>
                  <p className="mt-3 text-sm text-gray-700"><span className="font-medium">AI Recommendation:</span> Immediate supplier audit + proactive customer outreach for affected VINs</p>
                </div>
                <div className="flex flex-col space-y-2 ml-4">
                  <button className="px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700">Initiate Investigation</button>
                  <button className="px-4 py-2 border border-red-600 text-red-600 text-sm rounded hover:bg-red-50">View Affected VINs</button>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Top Failure Components */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Top Failure Components (Last 30 Days)</h3>
              <div className="space-y-3">
                {[
                  { component: 'Battery', failures: 342, trend: '-8%', color: 'blue' },
                  { component: 'Brake Pads', failures: 289, trend: '+3%', color: 'green' },
                  { component: 'Transmission', failures: 156, trend: '+12%', color: 'orange' },
                  { component: 'Suspension', failures: 134, trend: '-5%', color: 'blue' },
                  { component: 'HVAC Compressor', failures: 98, trend: '+18%', color: 'red' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{item.component}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div className={`bg-${item.color}-600 h-2 rounded-full`} style={{width: `${(item.failures / 342) * 100}%`}}></div>
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <p className="text-sm font-bold text-gray-900">{item.failures}</p>
                      <p className={`text-xs ${item.trend.startsWith('+') ? 'text-red-600' : 'text-green-600'}`}>{item.trend}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Supplier Performance */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Supplier Quality Scorecard</h3>
              <div className="space-y-3">
                {[
                  { supplier: 'Supplier-A (Battery)', score: 87, status: 'warning' },
                  { supplier: 'Supplier-B (Brakes)', score: 96, status: 'good' },
                  { supplier: 'Supplier-C (Electronics)', score: 93, status: 'good' },
                  { supplier: 'Supplier-D (Transmission)', score: 78, status: 'critical' },
                  { supplier: 'Supplier-E (HVAC)', score: 91, status: 'good' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{item.supplier}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <p className="text-lg font-bold text-gray-900">{item.score}</p>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.status === 'critical' ? 'bg-red-100 text-red-700' :
                        item.status === 'warning' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {item.status === 'critical' ? 'Action Required' : 
                         item.status === 'warning' ? 'Monitor' : 'Excellent'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Predictive Insights */}
          <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">AI Predictive Insights</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="text-sm font-medium text-gray-900 mb-2">Emerging Pattern</p>
                <p className="text-xs text-gray-600">2023 Model X transmissions showing early wear in cold climates (n=487). Recommend extended warranty for affected regions.</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="text-sm font-medium text-gray-900 mb-2">Cost Optimization</p>
                <p className="text-xs text-gray-600">Predictive maintenance reducing warranty claims by $2.1M/month. ROI: 340% vs traditional break-fix model.</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="text-sm font-medium text-gray-900 mb-2">Customer Sentiment</p>
                <p className="text-xs text-gray-600">NPS improved +12 points after proactive service implementation. 94% of customers appreciate early alerts.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );

  return (
    <div>
      {/* View Switcher */}
      <div className="bg-gray-900 text-white px-6 py-3 flex items-center justify-center space-x-4">
        <button 
          onClick={() => setActiveView('service')}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            activeView === 'service' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          Service Center Dashboard
        </button>
        <button 
          onClick={() => setActiveView('oem')}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            activeView === 'oem' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          OEM Quality Dashboard
        </button>
      </div>

      {/* Render Active View */}
      {activeView === 'service' ? <ServiceCenterDashboard /> : <OEMDashboard />}
    </div>
  );
};

export default ServiceDashboard;
