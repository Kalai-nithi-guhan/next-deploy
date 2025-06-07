// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AgriSmart - AI Fertilizer Recommendations",
  description: "Transform your farming with intelligent soil analysis and personalized fertilizer recommendations powered by advanced AI technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}

// ==========================================
// app/components/Navigation.tsx (separate file)
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/analyzer", label: "Analyzer 🔍" },
  ];

  return (
    <nav className="bg-green-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              🌾 AgriSmart
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-green-700 text-white'
                    : 'text-green-100 hover:bg-green-700 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

// ==========================================
// app/page.tsx (Home Page - separate file)
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-800 to-green-600">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">AI-Powered</span>
                  <span className="block text-green-200">Fertilizer Recommendations</span>
                </h1>
                <p className="mt-3 text-base text-green-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Transform your farming with intelligent soil analysis and personalized fertilizer recommendations powered by advanced AI technology.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="/analyzer"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-800 bg-white hover:bg-green-50 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105"
                    >
                      Start Analysis 🚀
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="/about"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-600 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose AgriSmart?
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                {
                  icon: '🧪',
                  title: 'Smart Soil Analysis',
                  description: 'Advanced algorithms analyze your soil composition for optimal recommendations.'
                },
                {
                  icon: '🤖',
                  title: 'AI Technology',
                  description: 'Machine learning models trained on extensive agricultural data.'
                },
                {
                  icon: '📊',
                  title: 'Data-Driven Results',
                  description: 'Evidence-based recommendations backed by scientific research.'
                },
                {
                  icon: '👨‍🌾',
                  title: 'Expert Insights',
                  description: 'Recommendations validated by agricultural experts and researchers.'
                }
              ].map((feature, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="text-4xl">{feature.icon}</div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.title}</h3>
                      <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// app/about/page.tsx (separate file)
export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About AgriSmart
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Revolutionizing agriculture through intelligent technology
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              At AgriSmart, we're dedicated to empowering farmers with cutting-edge AI technology 
              to make informed decisions about fertilizer usage. Our mission is to increase crop 
              yields while promoting sustainable farming practices through data-driven insights.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Our Technology</h3>
            <p className="text-gray-600 leading-relaxed">
              Our advanced machine learning algorithms analyze multiple soil parameters including 
              NPK levels, moisture content, temperature, and humidity to provide personalized 
              fertilizer recommendations tailored to your specific soil conditions.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Why It Matters</h3>
            <p className="text-gray-600 leading-relaxed">
              Proper fertilizer management is crucial for sustainable agriculture. Over-fertilization 
              can harm the environment, while under-fertilization reduces crop yields. Our AI system 
              helps find the perfect balance for optimal results.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Our Impact</h3>
            <p className="text-gray-600 leading-relaxed">
              Since our launch, we've helped thousands of farmers optimize their fertilizer usage, 
              resulting in increased crop yields, reduced environmental impact, and improved 
              profitability for farming operations worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// app/contact/page.tsx (separate file)
export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get in touch with our team of agricultural experts
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-green-800 mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="text-2xl mr-4">📧</div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">support@agrismart.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-2xl mr-4">📞</div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-2xl mr-4">📍</div>
                <div>
                  <p className="font-semibold text-gray-900">Address</p>
                  <p className="text-gray-600">
                    123 Agricultural Innovation Center<br />
                    Farm Technology District<br />
                    Green Valley, CA 90210
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-2xl mr-4">🕒</div>
                <div>
                  <p className="font-semibold text-gray-900">Business Hours</p>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-green-800 mb-6">Support & Resources</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Technical Support</h4>
                <p className="text-gray-600">
                  Need help with our AI analyzer? Our technical support team is available 
                  to assist you with any questions or issues.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Agricultural Consultation</h4>
                <p className="text-gray-600">
                  Connect with our team of agricultural experts for personalized advice 
                  and advanced farming strategies.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Partnership Opportunities</h4>
                <p className="text-gray-600">
                  Interested in partnering with AgriSmart? We're always looking for 
                  collaborations with innovative agricultural organizations.
                </p>
              </div>
              
              <div className="pt-4">
                <button className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors font-medium">
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// app/analyzer/page.tsx (separate file)
"use client";
import { useState } from 'react';

export default function Analyzer() {
  const [formData, setFormData] = useState({
    temperature: '',
    humidity: '',
    moisture: '',
    soilType: '',
    nitrogen: '',
    phosphorus: '',
    potassium: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Analysis complete! Recommendation: Based on your soil data, we recommend a balanced NPK fertilizer with additional organic matter.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="flex min-h-screen">
        {/* Left Panel */}
        <div className="w-1/3 bg-gradient-to-br from-green-800 to-green-600 p-8 text-white">
          <div className="text-4xl font-bold mb-2">🌾 AgriSmart</div>
          <div className="text-xl text-green-200 mb-8">AI-Powered Fertilizer Recommendations</div>
          
          <ul className="space-y-4">
            {[
              'Smart Soil Analysis',
              'Advanced Technology',
              'Data-Driven Results',
              'Expert Recommendations',
              'Quality Assurance'
            ].map((feature, index) => (
              <li key={index} className="flex items-center text-green-100">
                <span className="text-green-300 mr-3">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Right Panel */}
        <div className="flex-1 p-8 bg-white">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Fertilizer Recommendations
          </h2>
          
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Temperature (°C)
                </label>
                <input
                  type="number"
                  name="temperature"
                  value={formData.temperature}
                  onChange={handleInputChange}
                  step="0.1"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Humidity (%)
                </label>
                <input
                  type="number"
                  name="humidity"
                  value={formData.humidity}
                  onChange={handleInputChange}
                  step="0.1"
                  min="0"
                  max="100"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Moisture (%)
                </label>
                <input
                  type="number"
                  name="moisture"
                  value={formData.moisture}
                  onChange={handleInputChange}
                  step="0.1"
                  min="0"
                  max="100"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Soil Type
                </label>
                <select
                  name="soilType"
                  value={formData.soilType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Select soil type</option>
                  <option value="loamy">Loamy</option>
                  <option value="clay">Clay</option>
                  <option value="sandy">Sandy</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nitrogen (N) ppm
                </label>
                <input
                  type="number"
                  name="nitrogen"
                  value={formData.nitrogen}
                  onChange={handleInputChange}
                  step="0.1"
                  min="0"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phosphorus (P) ppm
                </label>
                <input
                  type="number"
                  name="phosphorus"
                  value={formData.phosphorus}
                  onChange={handleInputChange}
                  step="0.1"
                  min="0"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Potassium (K) ppm
                </label>
                <input
                  type="number"
                  name="potassium"
                  value={formData.potassium}
                  onChange={handleInputChange}
                  step="0.1"
                  min="0"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full mt-8 bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors font-medium text-lg"
            >
              🔍 Analyze & Recommend
            </button>
            </form>
        </div>
      </div>
    </div>
  );
}