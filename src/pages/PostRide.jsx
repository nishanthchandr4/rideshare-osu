import { useState } from 'react'
import { MapPin, Calendar, Clock, Users, Music } from 'lucide-react'

function PostRide() {
  const [form, setForm] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    seats: '',
    music: '',
    interests: '',
    instagram: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    const allFilled = Object.values(form).every(value => value.trim() !== '')
    if (!allFilled) {
      alert('Please fill out all fields before posting your ride.')
      return
    }
    console.log('Ride posted:', form)
    alert('Your ride has been posted!')
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Post a <span className="text-[#BB0000]">Ride</span>
        </h1>
        <p className="text-gray-500 mb-10">Fill open seats in your car and meet fellow Buckeyes</p>

        <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-6">

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700 flex items-center gap-2">
              <MapPin size={16} color="#BB0000" /> From
            </label>
            <input
              name="from"
              value={form.from}
              onChange={handleChange}
              placeholder="e.g. Ohio State Campus"
              className="border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-[#BB0000]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700 flex items-center gap-2">
              <MapPin size={16} color="#BB0000" /> To
            </label>
            <input
              name="to"
              value={form.to}
              onChange={handleChange}
              placeholder="e.g. Columbus Airport"
              className="border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-[#BB0000]"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col gap-2 flex-1">
              <label className="font-semibold text-gray-700 flex items-center gap-2">
                <Calendar size={16} color="#BB0000" /> Date
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-[#BB0000]"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label className="font-semibold text-gray-700 flex items-center gap-2">
                <Clock size={16} color="#BB0000" /> Time
              </label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-[#BB0000]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700 flex items-center gap-2">
              <Users size={16} color="#BB0000" /> Available Seats
            </label>
            <select
              name="seats"
              value={form.seats}
              onChange={handleChange}
              className="border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-[#BB0000]"
            >
              <option value="">Select seats</option>
              <option value="1">1 seat</option>
              <option value="2">2 seats</option>
              <option value="3">3 seats</option>
              <option value="4">4 seats</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700 flex items-center gap-2">
              <Music size={16} color="#BB0000" /> Music Taste
            </label>
            <input
              name="music"
              value={form.music}
              onChange={handleChange}
              placeholder="e.g. Hip Hop, R&B, Pop"
              className="border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-[#BB0000]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Interests</label>
            <input
              name="interests"
              value={form.interests}
              onChange={handleChange}
              placeholder="e.g. Basketball, Gaming, Hiking"
              className="border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-[#BB0000]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Instagram Handle</label>
            <input
              name="instagram"
              value={form.instagram}
              onChange={handleChange}
              placeholder="@yourusername"
              className="border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-[#BB0000]"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-[#BB0000] text-white py-3 rounded-full font-semibold hover:bg-red-800 transition mt-2"
          >
            Post My Ride
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostRide