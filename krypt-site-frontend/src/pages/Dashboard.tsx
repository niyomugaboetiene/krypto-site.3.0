import frontend from "../../public/frontend.gif";

const Dashboard = () => {
    return (
        <div className="min-h-screen">
            <div className="flex justify-between">
              <aside className="max-w-md">
                Crypto Site is modern decentralized application allows easy seeling and receiving token
                it is flexible and simple. <span>Its time to go !!</span>
              </aside>

              <aside className="max-w-md">
                  <img src={frontend} />
              </aside>
            </div>
          </div>
    )
}

export default Dashboard;