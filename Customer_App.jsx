import React, { useState } from 'react';
import { Car, AlertTriangle, CheckCircle, Calendar, MessageSquare, Wrench, TrendingUp, Battery, Gauge, MapPin, Phone, Send, Mic, X, Bell, Settings, Clock, Shield, Award } from 'lucide-react';

const OwnerInterface = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hi Sarah! I'm your AI car assistant. Your Honda Civic's battery health has declined to 68%. I predict it may fail within 2 weeks. Would you like to schedule a service appointment?", time: '9:24 AM' }
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { type: 'user', text: inputText, time: 'Just now' }]);
      setInputText('');
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          type: 'bot', 
          text: "Perfect! I've found 3 available slots this week at Honda Downtown Service Center. Wednesday 2 PM works best based on your calendar. Should I book it?",
          time: 'Just now'
        }]);
      }, 1000);
    }
  };

  // Dashboard View
  const Dashboard = () => (
    <div className="pb-20">
      {/* Hero Card - Vehicle Status */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white mb-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-blue-200 text-sm mb-1">Your Vehicle</p>
            <h2 className="text-2xl font-bold">2022 Honda Civic</h2>
            <p className="text-blue-200 text-sm">VIN: 1HGBH41JXMN109186</p>
          </div>
          <Car className="w-12 h-12 text-blue-300" />
        </div>
        
        <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm">Overall Health Score</span>
            <span className="text-2xl font-bold">87/100</span>
          </div>
          <div className="w-full bg-blue-900 bg-opacity-30 rounded-full h-2">
            <div className="bg-yellow-400 h-2 rounded-full" style={{width: '87%'}}></div>
          </div>
          <p className="text-xs text-blue-200 mt-2">Good condition • Next service in 14 days</p>
        </div>
      </div>

      {/* Critical Alert */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-300 rounded-xl p-4 mb-4">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 mb-1">⚡ AI Prediction: Battery Alert</h3>
            <p className="text-sm text-gray-700 mb-3">Your battery health has declined to 68%. Our AI predicts potential failure within 2 weeks (78% confidence).</p>
            <div className="flex space-x-2">
              <button 
                onClick={() => setChatOpen(true)}
                className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-medium hover:bg-orange-700"
              >
                Schedule Service
              </button>
              <button className="px-4 py-2 border border-orange-600 text-orange-600 rounded-lg text-sm font-medium hover:bg-orange-50">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <Gauge className="w-5 h-5 text-blue-600" />
            <span className="text-xs text-green-600 font-medium">Normal</span>
          </div>
          <p className="text-sm text-gray-600">Mileage</p>
          <p className="text-xl font-bold text-gray-900">42,847 mi</p>
        </div>
        
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <Battery className="w-5 h-5 text-orange-600" />
            <span className="text-xs text-orange-600 font-medium">Warning</span>
          </div>
          <p className="text-sm text-gray-600">Battery Health</p>
          <p className="text-xl font-bold text-gray-900">68%</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <Wrench className="w-5 h-5 text-green-600" />
            <span className="text-xs text-green-600 font-medium">Good</span>
          </div>
          <p className="text-sm text-gray-600">Engine</p>
          <p className="text-xl font-bold text-gray-900">95%</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <Shield className="w-5 h-5 text-blue-600" />
            <span className="text-xs text-blue-600 font-medium">Active</span>
          </div>
          <p className="text-sm text-gray-600">Warranty</p>
          <p className="text-xl font-bold text-gray-900">2.3 yrs</p>
        </div>
      </div>

      {/* Component Status */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-4">
        <h3 className="font-bold text-gray-900 mb-4">Component Status</h3>
        <div className="space-y-3">
          {[
            { name: 'Battery', status: 68, color: 'orange', alert: true, days: 14 },
            { name: 'Brake Pads', status: 82, color: 'green', alert: false, days: 45 },
            { name: 'Engine Oil', status: 91, color: 'green', alert: false, days: 90 },
            { name: 'Tires', status: 76, color: 'yellow', alert: false, days: 60 },
            { name: 'Air Filter', status: 88, color: 'green', alert: false, days: 120 },
          ].map((component, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <p className="text-sm font-medium text-gray-900">{component.name}</p>
                  {component.alert && (
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">
                      Action Needed
                    </span>
                  )}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      component.color === 'green' ? 'bg-green-500' :
                      component.color === 'yellow' ? 'bg-yellow-500' :
                      'bg-orange-500'
                    }`}
                    style={{width: `${component.status}%`}}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Next service in ~{component.days} days</p>
              </div>
              <span className="text-lg font-bold text-gray-900 ml-4">{component.status}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <h3 className="font-bold text-gray-900 mb-3">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3 pb-3 border-b border-gray-100">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Bell className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Battery health alert sent</p>
              <p className="text-xs text-gray-500">Today at 9:24 AM</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 pb-3 border-b border-gray-100">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-4 h-4 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Oil change completed</p>
              <p className="text-xs text-gray-500">Dec 1, 2025</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-4 h-4 text-purple-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Health score improved to 87</p>
              <p className="text-xs text-gray-500">Nov 28, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Service History View
  const ServiceHistory = () => (
    <div className="pb-20">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Service History</h2>
      
      <div className="space-y-3">
        {[
          { date: 'Dec 1, 2025', service: 'Oil Change & Filter Replacement', cost: '$89', location: 'Honda Downtown', status: 'completed' },
          { date: 'Sep 15, 2025', service: 'Tire Rotation & Alignment', cost: '$125', location: 'Honda Downtown', status: 'completed' },
          { date: 'Jun 3, 2025', service: 'Brake Inspection', cost: '$0', location: 'Honda Downtown', status: 'completed' },
          { date: 'Mar 20, 2025', service: 'Annual Maintenance Package', cost: '$320', location: 'Honda Downtown', status: 'completed' },
        ].map((service, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <p className="font-medium text-gray-900">{service.service}</p>
                <p className="text-sm text-gray-500">{service.date}</p>
              </div>
              <span className="text-lg font-bold text-gray-900">{service.cost}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{service.location}</span>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                Completed
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-blue-50 rounded-xl border border-blue-200 p-4">
        <div className="flex items-center space-x-3 mb-2">
          <Award className="w-6 h-6 text-blue-600" />
          <h3 className="font-bold text-gray-900">Maintenance Rewards</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">You've earned 340 points from regular maintenance!</p>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
            Redeem Points
          </button>
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm font-medium">
            View Rewards
          </button>
        </div>
      </div>
    </div>
  );

  // Appointments View
  const Appointments = () => (
    <div className="pb-20">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Appointments</h2>
        <button 
          onClick={() => setChatOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium"
        >
          + Book Service
        </button>
      </div>

      {/* Upcoming Appointment */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-300 p-4 mb-4">
        <div className="flex items-center space-x-2 mb-3">
          <Calendar className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-medium text-blue-600">UPCOMING</span>
        </div>
        <h3 className="font-bold text-gray-900 mb-2">Battery Replacement (AI Recommended)</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-gray-500" />
            <span>Wednesday, Dec 18 at 2:00 PM</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-gray-500" />
            <span>Honda Downtown Service Center</span>
          </div>
          <div className="flex items-center">
            <Wrench className="w-4 h-4 mr-2 text-gray-500" />
            <span>Technician: John Davidson (Certified)</span>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-blue-200 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-600">Estimated time</p>
            <p className="text-sm font-bold text-gray-900">35-45 minutes</p>
          </div>
          <div>
            <p className="text-xs text-gray-600">Estimated cost</p>
            <p className="text-sm font-bold text-gray-900">$185-220</p>
          </div>
          <div>
            <p className="text-xs text-gray-600">Loaner car</p>
            <p className="text-sm font-bold text-green-600">Reserved ✓</p>
          </div>
        </div>
        <div className="mt-4 flex space-x-2">
          <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
            Get Directions
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium">
            Reschedule
          </button>
        </div>
      </div>

      {/* Past Appointments */}
      <h3 className="font-bold text-gray-900 mb-3">Past Appointments</h3>
      <div className="space-y-3">
        {[
          { date: 'Dec 1, 2025', service: 'Oil Change', status: 'Completed' },
          { date: 'Sep 15, 2025', service: 'Tire Service', status: 'Completed' },
        ].map((apt, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">{apt.service}</p>
                <p className="text-sm text-gray-500">{apt.date}</p>
              </div>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                {apt.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-gray-900">AutoCare</h1>
              <p className="text-xs text-gray-500">Smart Vehicle Assistant</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">1</span>
            </button>
            <Settings className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 pt-4">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'appointments' && <Appointments />}
        {activeTab === 'history' && <ServiceHistory />}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 max-w-md mx-auto">
        <div className="flex items-center justify-around">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`flex flex-col items-center space-y-1 ${activeTab === 'dashboard' ? 'text-blue-600' : 'text-gray-400'}`}
          >
            <Gauge className="w-6 h-6" />
            <span className="text-xs font-medium">Dashboard</span>
          </button>
          <button 
            onClick={() => setActiveTab('appointments')}
            className={`flex flex-col items-center space-y-1 ${activeTab === 'appointments' ? 'text-blue-600' : 'text-gray-400'}`}
          >
            <Calendar className="w-6 h-6" />
            <span className="text-xs font-medium">Appointments</span>
          </button>
          <button 
            onClick={() => setActiveTab('history')}
            className={`flex flex-col items-center space-y-1 ${activeTab === 'history' ? 'text-blue-600' : 'text-gray-400'}`}
          >
            <Clock className="w-6 h-6" />
            <span className="text-xs font-medium">History</span>
          </button>
          <button 
            onClick={() => setChatOpen(true)}
            className="flex flex-col items-center space-y-1 text-gray-400 relative"
          >
            <div className="relative">
              <MessageSquare className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></span>
            </div>
            <span className="text-xs font-medium">Assistant</span>
          </button>
        </div>
      </nav>

      {/* Voice Chatbot Modal */}
      {chatOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end max-w-md mx-auto">
          <div className="bg-white rounded-t-3xl w-full h-[85vh] flex flex-col">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-t-3xl">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">AI Car Assistant</h3>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-blue-100">Online</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setChatOpen(false)}
                  className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-blue-100">I can help schedule service, answer questions about your car, and more!</p>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] ${msg.type === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'} rounded-2xl px-4 py-3`}>
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>{msg.time}</p>
                  </div>
                </div>
              ))}

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap gap-2 pt-2">
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50">
                  📅 Schedule service
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50">
                  🔋 Battery details
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50">
                  📍 Find service center
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50">
                  💬 Talk to human
                </button>
              </div>
            </div>

            {/* Chat Input */}
            <div className="border-t border-gray-200 p-4 bg-white">
              <div className="flex items-center space-x-2">
                <button className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200">
                  <Mic className="w-5 h-5 text-blue-600" />
                </button>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type or use voice..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  onClick={sendMessage}
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
              <p className="text-xs text-gray-500 text-center mt-2">
                Powered by AI • Responses are instant
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
