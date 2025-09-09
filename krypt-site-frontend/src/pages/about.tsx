import { useNavigate } from "react-router-dom";
const About = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-indigo-700 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-ping"></div>
      </div>

      <div className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Our Wallet App</span>
            </h1>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Our decentralized wallet app makes it easy to connect your MetaMask wallet, 
                send ETH, and interact with blockchain networks. 
                We aim to give everyone simple and secure access to Web3.
              </p>
              
              <div className="inline-flex space-x-4">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                   onClick={() => {
                      navigate('/');
                   }}>
                  Explore Features
                </button>
                <a className="px-6 py-3 bg-transparent border-2 border-purple-500 rounded-lg font-medium hover:bg-purple-500/20 transition-colors duration-300"
                  href="https://niyomugaboetiene.onrender.com/contact" rel="noopener noreferrer" target="_blank">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gray-900/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">Mission</h2>
              <p className="text-blue-100 leading-relaxed">
                To empower users by providing a secure, easy-to-use wallet 
                that connects people to blockchain technology in everyday life.
              </p>
            </div>

            <div className="bg-gray-900/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-400/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🌍</span>
              </div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">Vision</h2>
              <p className="text-blue-100 leading-relaxed">
                To become a gateway for millions of users into the decentralized world, 
                making crypto transfers as simple as sending a message.
              </p>
            </div>

            <div className="bg-gray-900/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-400/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">💡</span>
              </div>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Values</h2>
              <p className="text-blue-100 leading-relaxed">
                Transparency, security, and user empowerment 
                guide everything we build and deliver.
              </p>
            </div>
          </div>

          <div className="bg-gray-900/30 backdrop-blur-md rounded-3xl border border-white/10 p-12 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Team</h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                We are a small team of blockchain enthusiasts, developers, and designers 
                working to bring Web3 closer to everyone.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              <div className="w-64 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 overflow-hidden shadow-lg">
                  <div className="w-full h-full flex items-center justify-center text-3xl">
                    👨‍💻
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-1">Etiene Niyomugabo</h3>
                <p className="text-purple-400 mb-4">Founder & Developer</p>
                <p className="text-blue-200 text-sm">
                  Blockchain expert with a passion for decentralized finance and Web3 technologies.
                </p>

                <div className="flex justify-center space-x-4 mt-5">
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    <span className="text-lg">📱</span>
                  </button>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    <span className="text-lg">📧</span>
                  </button>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    <span className="text-lg">🔗</span>
                  </button>
                </div>
              </div>
              
              <div className="w-64 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-6 overflow-hidden shadow-lg">
                  <div className="w-full h-full flex items-center justify-center text-3xl">
                    👩‍💻
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-1">Etiene Niyomugabo</h3>
                <p className="text-cyan-400 mb-4">Lead Designer</p>
                <p className="text-blue-200 text-sm">
                  Creating beautiful and intuitive interfaces that make crypto accessible to everyone.
                </p>
                <div className="flex justify-center space-x-4 mt-5">
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    <span className="text-lg">📱</span>
                  </button>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    <span className="text-lg">📧</span>
                  </button>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    <span className="text-lg">🔗</span>
                  </button>
                </div>
              </div>
              
              <div className="w-64 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto mb-6 overflow-hidden shadow-lg">
                  <div className="w-full h-full flex items-center justify-center text-3xl">
                   👩‍💻
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-1">Etiene Niyomugabo</h3>
                <p className="text-emerald-400 mb-4">Security Specialist</p>
                <p className="text-blue-200 text-sm">
                  Ensuring our platform remains secure and trustworthy for all users.
                </p>
                <div className="flex justify-center space-x-4 mt-5">
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    <span className="text-lg">📱</span>
                  </button>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    <span className="text-lg">📧</span>
                  </button>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    <span className="text-lg">🔗</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-20">
            <div className="bg-gray-900/40 backdrop-blur-md rounded-xl p-6 text-center border border-white/10">
              <div className="text-3xl font-bold text-yellow-400 mb-2">200+</div>
              <div className="text-blue-200">Active Users</div>
            </div>
            <div className="bg-gray-900/40 backdrop-blur-md rounded-xl p-6 text-center border border-white/10">
              <div className="text-3xl font-bold text-green-400 mb-2">$1+</div>
              <div className="text-blue-200">Transactions</div>
            </div>
            <div className="bg-gray-900/40 backdrop-blur-md rounded-xl p-6 text-center border border-white/10">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-blue-200">Uptime</div>
            </div>
            <div className="bg-gray-900/40 backdrop-blur-md rounded-xl p-6 text-center border border-white/10">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-blue-200">Support</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-12 border border-white/10 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-8">
              Join thousands of users who are already managing their crypto assets with our secure wallet.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl font-bold text-gray-900 hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-2xl"
              onClick={() => {
                navigate('/wallet');
              }}>
              Connect Your Wallet Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;