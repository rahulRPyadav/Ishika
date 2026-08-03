import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LayoutDashboard, Compass, CalendarCheck, PlusCircle, Trash2, X, CheckCircle, Users } from 'lucide-react';

const AdminDashboard = () => {
  const [tours, setTours] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [activeTab, setActiveTab] = useState('bookings'); // 'bookings' or 'tours'
  const [showAddModal, setShowAddModal] = useState(false);

  // New Tour Form State
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    duration: '',
    price: '',
    category: 'Hills',
    image: '',
    description: '',
    inclusions: ''
  });

  const fetchData = async () => {
    try {
      const tourRes = await axios.get('http://localhost:5000/api/tours');
      const bookingRes = await axios.get('http://localhost:5000/api/bookings');
      setTours(tourRes.data);
      setBookings(bookingRes.data);
    } catch (err) {
      console.error("Error fetching admin data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Update Booking Status
  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/api/bookings/${id}/status`, { status });
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  // Delete Tour
  const handleDeleteTour = async (id) => {
    if (window.confirm("Kya aap sach me ye tour package delete karna chahte hain?")) {
      try {
        await axios.delete(`http://localhost:5000/api/tours/${id}`);
        fetchData();
      } catch (err) {
        console.error("Delete Error:", err);
      }
    }
  };

  // Add New Tour Submit
  const handleAddTourSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        price: Number(formData.price),
        inclusions: formData.inclusions.split(',').map(item => item.trim())
      };
      await axios.post('http://localhost:5000/api/tours', payload);
      alert('✅ New Tour Package Added Successfully!');
      setShowAddModal(false);
      setFormData({ title: '', location: '', duration: '', price: '', category: 'Hills', image: '', description: '', inclusions: '' });
      fetchData();
    } catch (err) {
      alert('❌ Error adding tour: ' + err.message);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-white mb-8 border-b border-slate-700 pb-4">Ishika Admin Panel</h2>
          <nav className="flex flex-col gap-3">
            <button 
              onClick={() => setActiveTab('bookings')}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium w-full text-left transition ${
                activeTab === 'bookings' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'
              }`}
            >
              <CalendarCheck size={18} /> Bookings ({bookings.length})
            </button>
            <button 
              onClick={() => setActiveTab('tours')}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium w-full text-left transition ${
                activeTab === 'tours' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'
              }`}
            >
              <Compass size={18} /> Manage Tours ({tours.length})
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Area */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-slate-800">
            {activeTab === 'bookings' ? 'Customer Booking Requests' : 'Tour Packages Management'}
          </h1>
          {activeTab === 'tours' && (
            <button 
              onClick={() => setShowAddModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700 transition"
            >
              <PlusCircle size={18} /> Add New Tour
            </button>
          )}
        </div>

        {/* TAB 1: BOOKINGS LIST */}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-xl border p-6 shadow-sm overflow-x-auto">
            {bookings.length === 0 ? (
              <p className="text-slate-500 text-center py-6">Abhi koi booking request nahi aayi hai.</p>
            ) : (
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 text-slate-700 uppercase text-xs">
                  <tr>
                    <th className="p-3">Tour</th>
                    <th className="p-3">Customer</th>
                    <th className="p-3">Phone / Email</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Members</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {bookings.map((b) => (
                    <tr key={b._id} className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-slate-800">{b.tourName}</td>
                      <td className="p-3">{b.customerName}</td>
                      <td className="p-3">
                        <div className="font-medium text-slate-800">{b.phone}</div>
                        <div className="text-xs text-slate-400">{b.email}</div>
                      </td>
                      <td className="p-3">{b.travelDate}</td>
                      
                      {/* HIGHLIGHTED MEMBERS / GUESTS BADGE */}
                      <td className="p-3">
                        <span className="inline-flex items-center gap-1 bg-[#FFF3C8] text-[#458393] px-2.5 py-1 rounded-lg text-xs font-black border border-[#E5CB90]/60">
                          <Users size={12} /> {b.guests || 1} Person{(b.guests || 1) > 1 ? 's' : ''}
                        </span>
                      </td>

                      <td className="p-3">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                          b.status === 'Confirmed' 
                            ? 'bg-green-100 text-green-700' 
                            : b.status === 'Cancelled'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-amber-100 text-amber-700'
                        }`}>
                          {b.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1.5">
                          {b.status !== 'Confirmed' && (
                            <button 
                              onClick={() => handleStatusChange(b._id, 'Confirmed')}
                              className="bg-green-600 text-white text-xs px-2.5 py-1 rounded hover:bg-green-700 font-medium cursor-pointer"
                            >
                              Confirm
                            </button>
                          )}
                          {b.status !== 'Cancelled' && (
                            <button 
                              onClick={() => handleStatusChange(b._id, 'Cancelled')}
                              className="bg-slate-200 text-slate-700 hover:bg-red-100 hover:text-red-700 text-xs px-2.5 py-1 rounded font-medium cursor-pointer"
                            >
                              Cancel
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* TAB 2: TOURS MANAGEMENT */}
        {activeTab === 'tours' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour) => (
              <div key={tour._id} className="bg-white border rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
                <img src={tour.image} alt={tour.title} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-slate-800">{tour.title}</h3>
                    <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600 font-medium">{tour.category}</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">{tour.location} • {tour.duration}</p>
                  <p className="text-lg font-bold text-blue-600 mt-2">₹{tour.price}</p>
                </div>
                <div className="p-4 border-t bg-slate-50 flex justify-end">
                  <button 
                    onClick={() => handleDeleteTour(tour._id)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 size={16} /> Delete Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ADD TOUR MODAL POPUP */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4 border-b pb-2">
                <h2 className="text-lg font-bold text-slate-800">Add New Tour Package</h2>
                <button onClick={() => setShowAddModal(false)}><X size={20} /></button>
              </div>

              <form onSubmit={handleAddTourSubmit} className="space-y-3">
                <div>
                  <label className="text-xs font-semibold text-slate-600">Tour Title</label>
                  <input type="text" required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full border p-2 rounded text-sm mt-1" placeholder="e.g. Kashmir Paradise Tour" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-600">Location</label>
                    <input type="text" required value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} className="w-full border p-2 rounded text-sm mt-1" placeholder="e.g. Srinagar" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-600">Duration</label>
                    <input type="text" required value={formData.duration} onChange={e => setFormData({...formData, duration: e.target.value})} className="w-full border p-2 rounded text-sm mt-1" placeholder="e.g. 5 Days / 4 Nights" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-600">Price (INR)</label>
                    <input type="number" required value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} className="w-full border p-2 rounded text-sm mt-1" placeholder="15000" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-600">Category</label>
                    <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full border p-2 rounded text-sm mt-1">
                      <option value="Hills">Hills</option>
                      <option value="Heritage">Heritage</option>
                      <option value="Beach">Beach</option>
                      <option value="Wildlife">Wildlife</option>
                      <option value="Pilgrimage">Pilgrimage</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600">Image URL</label>
                  <input type="url" required value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} className="w-full border p-2 rounded text-sm mt-1" placeholder="https://images.unsplash.com/..." />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600">Description</label>
                  <textarea required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full border p-2 rounded text-sm mt-1 h-20" placeholder="Tour details..."></textarea>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600">Inclusions (Comma separated)</label>
                  <input type="text" value={formData.inclusions} onChange={e => setFormData({...formData, inclusions: e.target.value})} className="w-full border p-2 rounded text-sm mt-1" placeholder="Hotel, Meals, Cab, Guide" />
                </div>

                <div className="pt-3 flex gap-2">
                  <button type="button" onClick={() => setShowAddModal(false)} className="w-1/2 bg-slate-200 py-2 rounded font-medium text-sm">Cancel</button>
                  <button type="submit" className="w-1/2 bg-blue-600 text-white py-2 rounded font-medium text-sm hover:bg-blue-700">Save Tour</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;