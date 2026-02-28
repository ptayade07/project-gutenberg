import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Subscription = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 1,
      name: "Free",
      price: "$0/month",
      benefits: [
        "Access to a limited selection of books",
        "Join community discussions",
        "Basic reading history"
      ]
    },
    {
      id: 2,
      name: "Premium",
      price: "$9.99/month",
      benefits: [
        "Access to all books",
        "Join community discussions",
        "Advanced reading history",
        "Personalized book recommendations"
      ]
    },
    {
      id: 3,
      name: "VIP",
      price: "$19.99/month",
      benefits: [
        "All Premium benefits",
        "Exclusive author interviews",
        "Early access to new releases",
        "Monthly book club access"
      ]
    }
  ];

  const handleSubscribe = (plan) => {
    setSelectedPlan(plan);
    // Here you can add logic to handle the subscription process
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#0A0A0F] to-[#1A1A1F] overflow-hidden font-['Inter']">
      {/* Background gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[#8B3DFF]/10 rounded-[600px] filter blur-[120px] transform -translate-y-1/4"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0F]/90 to-[#0A0A0F]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,61,255,0.08),transparent_70%)]"></div>
      </div>

      {/* Back Button */}
      <button 
        onClick={() => navigate('/main')}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-all duration-300"
      >
        <FaArrowLeft /> Back to Main Page
      </button>

      {/* Content container */}
      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-['General_Sans'] font-medium tracking-[-0.03em] text-white mb-4">
              Subscription Plans
            </h1>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Choose a plan that suits your reading needs.
            </p>
          </motion.div>

          {/* Subscription Plans */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`bg-white/[0.02] backdrop-blur-2xl rounded-2xl p-6 border border-white/5 transition-transform duration-300 ${selectedPlan === plan ? 'transform scale-105' : ''}`}
                onClick={() => handleSubscribe(plan)}
              >
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-lg text-purple-400 mb-4">{plan.price}</p>
                <h4 className="text-lg font-medium text-white mb-2">Benefits:</h4>
                <ul className="list-disc list-inside text-gray-400">
                  {plan.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center mb-1">
                      <FaCheckCircle className="text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Payment Information Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Payment Information</h2>
            <p className="text-gray-400 mb-2">Enter your payment details to complete the subscription.</p>
            
            <label className="block text-gray-300 mb-1" htmlFor="cardNumber">Card Number</label>
            <input 
              type="text" 
              id="cardNumber"
              placeholder="Card Number" 
              className="w-full p-3 mb-4 rounded border border-white/50 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            
            <label className="block text-gray-300 mb-1" htmlFor="expirationDate">Expiration Date (MM/YY)</label>
            <input 
              type="text" 
              id="expirationDate"
              placeholder="Expiration Date (MM/YY)" 
              className="w-full p-3 mb-4 rounded border border-white/50 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            
            <label className="block text-gray-300 mb-1" htmlFor="cvv">CVV</label>
            <input 
              type="text" 
              id="cvv"
              placeholder="CVV" 
              className="w-full p-3 mb-4 rounded border border-white/50 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            
            <button 
              className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition duration-300"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription; 