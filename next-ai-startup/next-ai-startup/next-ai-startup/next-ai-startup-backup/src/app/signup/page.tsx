import Link from 'next/link';
export default function Signup() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md p-8 border border-zinc-800 bg-zinc-950 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#32CD32]">Create Account</h2>
        <input type="text" placeholder="Name" className="w-full bg-zinc-900 border border-zinc-800 rounded p-3 mb-4 text-white" />
        <input type="email" placeholder="Email" className="w-full bg-zinc-900 border border-zinc-800 rounded p-3 mb-4 text-white" />
        <input type="password" placeholder="Password" className="w-full bg-zinc-900 border border-zinc-800 rounded p-3 mb-6 text-white" />
        <Link href="/dashboard" className="block text-center bg-[#32CD32] text-black font-bold py-3 rounded">Sign Up</Link>
        <p className="mt-4 text-center text-sm text-zinc-500">Already have an account? <Link href="/login" className="text-[#32CD32]">Log in</Link></p>
      </div>
    </div>
  )
}