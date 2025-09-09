import frontend from "../../public/frontend.gif";

const Dashboard = () => {
  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-to-r from-blue-800 via-purple-500 to-blue-600">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        <aside className="max-w-md text-lg md:text-xl text-white font-bold mb-8 md:mb-0 md:mr-8">
          Welcome to <span className="font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">Crypto Site</span>, 
          your go-to platform for exploring the world of blockchain and digital assets. Here, you can track your tokens, manage your wallet, interact with NFTs,
          and monitor transactions — all in one secure and user-friendly interface. <br /><br />
          <span className="font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">Crypto Site</span> is a modern decentralized application that allows easy sending and receiving of tokens.
          It is flexible and simple - you can explore the crypto world. Buy and sell using this modern app. <span className="italic">It's time to go !!</span>
        </aside>

        <aside className="max-w-md">
          <img src={frontend} alt="Crypto visualization" className="rounded-lg shadow-xl" />
        </aside>
      </div>
    </div>
  )
}

export default Dashboard;