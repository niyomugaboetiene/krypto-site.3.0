import frontend from "../../public/frontend.gif";

const Dashboard = () => {
    return (
        <div className="min-h-screen">
            <div className="flex justify-between">
              <aside className="max-w-md text-xl text-white font-bold">
                Welcome to <span className="font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg mb-4 md:mb-0">Crypto Site</span>, 
                your go-to platform for exploring the world of blockchain and digital assets. Here, you can track your tokens, manage your wallet, interact with NFTs,
                and monitor transactions — all in one secure and user-friendly interface. <br /><br />
                <span className="font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg mb-4 md:mb-0">Crypto Site</span> is modern decentralized application allows easy seeling and receiving token
                it is flexible and simple you can exprole crypto world. Buy and sell usng this modern app. <span className="italic">Its time to go !!</span>
              </aside>

              <aside className="max-w-md">
                  <img src={frontend} />
              </aside>
            </div>
          </div>
    )
}

export default Dashboard;