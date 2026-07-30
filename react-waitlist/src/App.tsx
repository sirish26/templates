import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-12 text-center animate-in fade-in duration-500">
      <h1 className="text-4xl font-black mb-4">Join the beta</h1>
      <Link to="/survey" className="block w-full bg-emerald-500 text-white font-bold text-lg rounded-xl px-5 py-4 mt-8 hover:scale-[1.02] transition-transform">Get Started</Link>
    </div>
  );
}

function Survey() {
  return (
    <div className="p-12 text-center animate-in slide-in-from-right duration-500">
      <h1 className="text-2xl font-bold mb-8">What is your role?</h1>
      <Link to="/status" className="block w-full bg-gray-50 border-2 border-gray-100 p-4 rounded-xl mb-4 hover:border-emerald-200">Designer</Link>
      <Link to="/status" className="block w-full bg-gray-50 border-2 border-gray-100 p-4 rounded-xl mb-4 hover:border-emerald-200">Engineer</Link>
    </div>
  );
}

function Status() {
  return (
    <div className="p-12 text-center animate-in zoom-in duration-500">
      <h1 className="text-4xl font-black mb-4 text-emerald-500">You're in line!</h1>
      <p className="text-xl text-gray-500 font-medium">Position: #14,092</p>
    </div>
  );
}

function Product() {
  return (
    <div className="p-12 text-center">
      <h1 className="text-3xl font-black mb-4">Features</h1>
      <p className="text-gray-500">Our product offers X, Y, and Z to help you move faster.</p>
    </div>
  );
}

function FAQ() {
  return (
    <div className="p-12 text-left">
      <h1 className="text-3xl font-black mb-8">FAQ</h1>
      <div className="mb-4"><h3 className="font-bold">When is launch?</h3><p className="text-gray-500">Q4 2026</p></div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans text-gray-900">
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <nav className="flex justify-center gap-6 p-4 bg-gray-50 border-b border-gray-100 text-sm font-bold text-gray-400">
             <Link to="/" className="hover:text-emerald-500">Home</Link>
             <Link to="/product" className="hover:text-emerald-500">Product</Link>
             <Link to="/faq" className="hover:text-emerald-500">FAQ</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/status" element={<Status />} />
            <Route path="/product" element={<Product />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}