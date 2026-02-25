import { Mail, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function SignIn() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (!email.endsWith('@osu.edu')) {
      setError('RideShare@OSU is only available to Ohio State students. Please use your @osu.edu email.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 relative">
        <Link to="/" className="absolute top-6 left-6 text-gray-400 hover:text-[#BB0000] transition text-sm font-medium flex items-center gap-1">
            ← Back to Home
        </Link>
      {!submitted ? (
        <div className="bg-white rounded-3xl shadow-sm p-10 max-w-md w-full text-center">

          {/* Logo */}
          <h1 className="text-3xl font-bold text-[#BB0000] mb-1">RideShare@OSU</h1>
          <p className="text-gray-400 text-sm mb-8">Built for Buckeyes, by Buckeyes.</p>

          {/* Coming Soon Badge */}
          <div className="inline-block bg-red-50 text-[#BB0000] text-sm font-semibold px-4 py-1 rounded-full mb-6">
            🚀 Launching Soon
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">Be the first to ride.</h2>
          <p className="text-gray-500 mb-8">
            RideShare@OSU is almost here. Enter your OSU email to join the waitlist and get early access when we launch.
          </p>

          {/* Email Input */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3">
              <Mail size={18} color="#BB0000" />
              <input
                type="email"
                placeholder="yourname@osu.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 focus:outline-none text-gray-700 text-sm"
              />
            </div>
            {error && (
              <p className="text-red-600 text-sm text-left">{error}</p>
            )}
            <button
              onClick={handleSubmit}
              className="w-full bg-[#BB0000] text-white py-3 rounded-full font-semibold hover:bg-red-800 transition flex items-center justify-center gap-2"
            >
              Join the Waitlist <ArrowRight size={18} />
            </button>
          </div>

          {/* Trust Signal */}
          <p className="text-gray-400 text-xs mt-6">
            🔒 OSU students only. Your email will never be shared.
          </p>

          {/* Stats */}
          <div className="flex justify-around mt-8 pt-6 border-t border-gray-100">
            <div>
              <p className="text-2xl font-bold text-[#BB0000]">OSU</p>
              <p className="text-gray-400 text-xs">Verified Only</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#BB0000]">Free</p>
              <p className="text-gray-400 text-xs">Always</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#BB0000]">🎵</p>
              <p className="text-gray-400 text-xs">Vibe Matched</p>
            </div>
          </div>

        </div>
      ) : (
        // Success State
        <div className="bg-white rounded-3xl shadow-sm p-10 max-w-md w-full text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">You're on the list!</h2>
          <p className="text-gray-500 mb-6">
            Thanks for joining the RideShare@OSU waitlist. We'll hit you at <span className="text-[#BB0000] font-medium">{email}</span> when we launch.
          </p>
          <div className="bg-red-50 rounded-2xl p-4 text-sm text-gray-600">
            In the meantime, explore the platform and let us know what you think. Your feedback shapes what we build next.
          </div>
          <div className="mt-6">
          <Link to="/" className="text-[#BB0000] font-semibold hover:underline">
            ← Back to RideShare@OSU
          </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default SignIn