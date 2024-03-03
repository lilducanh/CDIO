import { Home, Zap, CreditCard, User, BedDouble, MessagesSquare, Bell, FilePen, LogOut, Bolt, HelpCircle } from 'lucide-react';
import NotificationCard from '../components/NotificationCard';
const notification = {
  sender: "Admin",
  time: "10:00 AM",
  date: "2023-04-01"
};
const listMenu = [
  {
    name: "Home Page",
    path: "/",
    icon: <Home size={24} />
  },
  {
    name: "Utilities",
    path: "/utilities",
    icon: <Zap size={24} />
  },
  {
    name: "Payment",
    path: "/payment",
    icon: <CreditCard size={24} />
  },
  {
    name: "User Management",
    path: "/user-management",
    icon: <User size={24} />
  },
  {
    name: "Room Management",
    path: "/room-management",
    icon: <BedDouble size={24} />,
  },
  {
    name: "Chat",
    path: "/chat",
    icon: <MessagesSquare size={24} />
  },
  {
    name: "Notification",
    path: "/notification",
    icon: <Bell size={24} />
  }
];

const accountList = [
  {
    name: "Profile",
    path: "/profile",
    icon: <FilePen size={24} />
  },
  {
    name: "Setting",
    path: "/setting",
    icon: <Bolt size={24} />
  },
  {
    name: "Logout",
    path: "/profile",
    icon: <LogOut size={24} />
  },
]

const NotificationManage = () => {
  return (
    
    <div className="w-full h-auto grid grid-cols-6 ">

<header className="w-[1099px] h-[39px] absolute justify-between items-end inline-flex mt-9 mb-5" style={{ marginLeft : "300px" }}>
  <div className="w-[206px] h-[41px] relative">
    <div className="w-[41px] h-[41px] left-0 top-0 absolute bg-yellow-100 rounded-full" />
    <div className="left-[16px] top-[8px] relative text-zinc-700 text-xl mb-5 font-semibold font-['Inter']">Notifi Management</div>
  </div>
  <div className="justify-start items-center gap-10 flex">
    <div className="h-10 p-2 bg-white rounded-lg border border-stone-200 justify-start items-center gap-2 flex">
      <div className="w-6 h-6 relative" />
      <div className="text-center text-gray-500 text-xs font-semibold font-['Inter']">Search</div>
    </div>
    <div className="justify-start items-center gap-3 flex">
      <div className="flex-col justify-start items-end inline-flex">
        <div className="text-center text-zinc-700 text-sm font-semibold font-['Inter']">Hello, Admin213</div>
        <div className="text-center text-gray-500 text-[10px] font-semibold font-['Inter']">Host</div>
      </div>
      <img className="w-10 h-10 rounded-full border-2 border-slate-200" src="https://via.placeholder.com/40x40" />
    </div> 

    
  </div>
</header>
      {/* Sidebar */}
      <div className="w-[250px] h-full py-9 px-6 bg-gradient-to-b from-[#3C4448] to-[#202021]">
        <div className="mb-14 flex items-center gap-3">
          <Home size={40} />
          <div>
            <h1 className="text-white text-xl font-bold">VILAHOUSE</h1>
            <p className="text-[#D0E6EA] text-sm">Ten phong tro</p>
          </div>
        </div>
        
        {/* Menu */}
        <nav className="flex flex-col gap-2 items-start mb-5">
          {listMenu.map((item) => (
            <div className="px-[10px] py-2 text-[#F6F6BD] w-full rounded-md hover:bg-[#F6F6BD] hover:text-[#3C4448] text-xs" key={item.name}>
              <div className="flex items-center gap-3 font-bold cursor-pointer">
                {item.icon}
                <p className="text-sm">{item.name}</p>
              </div>
            </div>
          ))}
        </nav>
        
        <h4 className="uppercase text-white text-xs font-bold mb-4">Account</h4>
        <nav className="flex flex-col gap-2 items-start mb-8">
          {accountList.map((item) => (
            <div className="px-[10px] py-2 text-[#F6F6BD] w-full rounded-md hover:bg-[#F6F6BD] hover:text-[#3C4448] text-xs" key={item.name}>
              <div className="flex items-center gap-3 font-bold cursor-pointer">
                {item.icon}
                <p className="text-sm">{item.name}</p>
              </div>
            </div>
          ))}
        </nav>

        <div className="bg-[#F6F6BD] w-full rounded-[20px] p-6">
          <div className="w-9 h-9 flex items-center justify-center bg-[#3C4448] rounded-md text-[#F6F6BD] mb-5">
            <HelpCircle color='#F6F6BD' size={24} />
          </div>
          <p className="text-[#3C4448] text-xs font-medium">Need help?</p>
          <p className="text-[#3C4448] text-sm mb-3">Contact us</p>
          <button className="w-full bg-[#3C4448] text-[#F6F6BD]">Contact</button>
        </div>
      </div>
      {/* Main Content */}
      
      {/* Notification */}
      
      <div className="w-[580px] h-[800px] relative bg-red-100 mt-20 ml-10">
    <div className="text-gray-500 absolute text-base font-semibold font-['Inter'] ml-3 mt-3">Notification</div>
    <div className="w-[530px] h-[126px] mt-10 flex-col justify-start items-start gap-1.5 inline-flex">
        <div className="flex-col justify-start items-start gap-2 flex">
            <div className="h-[126px] relative">
                <div className="left-0 top-0 flex text-black text-sm font-medium font-['Inter'] ml-3 mt-3 leading-[14px]">Create new notification</div>
                <div className="w-[530px] h-20 px-3 py-2 left-0 top-[40px] ml-3 absolute bg-white rounded-md border border-slate-300">
                    <textarea className="w-full h-full text-slate-400 text-sm font-normal font-['Inter'] leading-tight resize-none outline-none" placeholder="Type your message here"></textarea>
                    <h2 className="text-slate-500 text-sm font-normal font-['Inter'] flex mt-3">This notification will be sent to all users</h2>
                    <button className=" flex bg-black hover:bg-brown-500 text-white px-4 py-2 rounded-md mt-3" style={{ right: '7px', position: 'absolute', bottom: '-50px' }}>Send</button>
                </div>
            </div>
        </div>
        <div className="text-left text-gray-500 text-lg font-semibold font-['Inter'] mt-10 ml-5">Notification List</div>
        
<div className="w-[530px] h-20 relative bg-white rounded-md border border-neutral-00 ml-3 " style={{ marginBottom: '20px' }}>
    <div className="w-5 h-5 left-[9px] top-[10px] absolute" />
    <div className="left-[40px] top-[8px] absolute justify-start items-center gap-[41px] inline-flex">
        <div className="text-zinc-700 text-sm font-semibold font-['Inter'] leading-normal">Nguyen Van Anh</div>
        <div className="text-zinc-700 text-sm font-semibold font-['Inter'] leading-normal">12:40AM</div>
        <div className="text-zinc-700 text-sm font-semibold font-['Inter'] leading-normal">Feb 13 2024</div>
    </div>
    <div className="w-[417px] left-[40px] top-[36px] absolute text-black text-sm font-normal font-['Inter'] leading-none">Everyone, please keep the hallway clean. Please do not litter or organize parties to avoid causing disorder.</div>
    <div className="left-[493px] top-[13px] absolute flex-col justify-center items-start gap-3.5 inline-flex">
        <div className="w-5 h-5 relative" />
        <div className="w-5 h-5 relative" />
    </div>
    <button className="absolute right-[10px] top-[10px] bg-red-500 hover:bg-brown-500 text-white px-2 py-2 rounded-md font-medium transition-colors duration-300">Delete</button>
</div>
<div className="w-[530px] h-20 relative bg-white rounded-md border border-neutral-00 ml-3 mt-12" style={{ marginBottom: '20px' }}>
    <div className="w-5 h-5 left-[9px] top-[10px] absolute" />
    <div className="left-[40px] top-[8px] absolute justify-start items-center gap-[41px] inline-flex">
        <div className="text-zinc-700 text-sm font-semibold font-['Inter'] leading-normal">Nguyen Van Anh</div>
        <div className="text-zinc-700 text-sm font-semibold font-['Inter'] leading-normal">12:40AM</div>
        <div className="text-zinc-700 text-sm font-semibold font-['Inter'] leading-normal">Feb 13 2024</div>
    </div>
    <div className="w-[417px] left-[40px] top-[36px] absolute text-black text-sm font-normal font-['Inter'] leading-none">Everyone, please keep the hallway clean. Please do not litter or organize parties to avoid causing disorder.</div>
    <div className="left-[493px] top-[13px] absolute flex-col justify-center items-start gap-3.5 inline-flex">
        <div className="w-5 h-5 relative" />
        <div className="w-5 h-5 relative" />
    </div>
    <button className="absolute right-[10px] top-[10px] bg-red-500 hover:bg-brown-500 text-white px-2 py-2 rounded-md font-medium transition-colors duration-300">Delete</button>
</div>
<div className="w-[530px] h-20 relative bg-white rounded-md border border-neutral-00 ml-3 mt-12" style={{ marginBottom: '20px' }}>
    <div className="w-5 h-5 left-[9px] top-[10px] absolute" />
    <div className="left-[40px] top-[8px] absolute justify-start items-center gap-[41px] inline-flex">
        <div className="text-zinc-700 text-sm font-semibold font-['Inter'] leading-normal">Nguyen Van Anh</div>
        <div className="text-zinc-700 text-sm font-semibold font-['Inter'] leading-normal">12:40AM</div>
        <div className="text-zinc-700 text-sm font-semibold font-['Inter'] leading-normal">Feb 13 2024</div>
    </div>
    <div className="w-[417px] left-[40px] top-[36px] absolute text-black text-sm font-normal font-['Inter'] leading-none">Everyone, please keep the hallway clean. Please do not litter or organize parties to avoid causing disorder.</div>
    <div className="left-[493px] top-[13px] absolute flex-col justify-center items-start gap-3.5 inline-flex">
        <div className="w-5 h-5 relative" />
        <div className="w-5 h-5 relative" />
    </div>
    <button className="absolute right-[10px] top-[10px] bg-red-500 hover:bg-brown-500 text-white px-2 py-2 rounded-md font-medium transition-colors duration-300">Delete</button>
</div>
<div className="w-[530px] h-20 relative bg-white rounded-md border border-neutral-00 ml-3 mt-12" style={{ marginBottom: '20px' }}>
    <div className="w-5 h-5 left-[9px] top-[10px] absolute" />
    <div className="left-[40px] top-[8px] absolute justify-start items-center gap-[41px] inline-flex">
        <div className="text-zinc-700 text-sm font-semibold font-['Inter'] leading-normal">Nguyen Van Anh</div>
        <div className="text-zinc-700 text-sm font-semibold font-['Inter'] leading-normal">12:40AM</div>
        <div className="text-zinc-700 text-sm font-semibold font-['Inter'] leading-normal">Feb 13 2024</div>
    </div>
    <div className="w-[417px] left-[40px] top-[36px] absolute text-black text-sm font-normal font-['Inter'] leading-none">Everyone, please keep the hallway clean. Please do not litter or organize parties to avoid causing disorder.</div>
    <div className="left-[493px] top-[13px] absolute flex-col justify-center items-start gap-3.5 inline-flex">
        <div className="w-5 h-5 relative" />
        <div className="w-5 h-5 relative" />
    </div>
    <button className="absolute right-[10px] top-[10px] bg-red-500 hover:bg-brown-500 text-white px-2 py-2 rounded-md font-medium transition-colors duration-300">Delete</button>
</div>
<div className="w-[530px] h-20 relative bg-white rounded-md border border-neutral-00 ml-3 mt-12" style={{ marginBottom: '20px' }}>
    <div className="w-5 h-5 left-[9px] top-[10px] absolute" />
    <div className="left-[40px] top-[8px] absolute justify-start items-center gap-[41px] inline-flex">
        <div className="text-zinc-700 text-sm font-semibold font-['Inter'] leading-normal">Nguyen Van Anh</div>
        <div className="text-zinc-700 text-sm font-semibold font-['Inter'] leading-normal">12:40AM</div>
        <div className="text-zinc-700 text-sm font-semibold font-['Inter'] leading-normal">Feb 13 2024</div>
    </div>
    <div className="w-[417px] left-[40px] top-[36px] absolute text-black text-sm font-normal font-['Inter'] leading-none">Everyone, please keep the hallway clean. Please do not litter or organize parties to avoid causing disorder.</div>
    <div className="left-[493px] top-[13px] absolute flex-col justify-center items-start gap-3.5 inline-flex">
        <div className="w-5 h-5 relative" />
        <div className="w-5 h-5 relative" />
    </div>
    <button className="absolute right-[10px] top-[10px] bg-red-500 hover:bg-brown-500 text-white px-2 py-2 rounded-md font-medium transition-colors duration-300">Delete</button>
</div>
<div className="w-[530px] h-20 relative bg-white rounded-md border border-neutral-00 ml-3 mt-12" style={{ marginBottom: '20px' }}>
    <div className="w-5 h-5 left-[9px] top-[10px] absolute" />
    <div className="left-[40px] top-[8px] absolute justify-start items-center gap-[41px] inline-flex">
        <div className="text-zinc-700 text-sm font-semibold font-['Inter'] leading-normal">Nguyen Van Anh</div>
        <div className="text-zinc-700 text-sm font-semibold font-['Inter'] leading-normal">12:40AM</div>
        <div className="text-zinc-700 text-sm font-semibold font-['Inter'] leading-normal">Feb 13 2024</div>
    </div>
    <div className="w-[417px] left-[40px] top-[36px] absolute text-black text-sm font-normal font-['Inter'] leading-none">Everyone, please keep the hallway clean. Please do not litter or organize parties to avoid causing disorder.</div>
    <div className="left-[493px] top-[13px] absolute flex-col justify-center items-start gap-3.5 inline-flex">
        <div className="w-5 h-5 relative" />
        <div className="w-5 h-5 relative" />
    </div>
    <button className="absolute right-[10px] top-[10px] bg-red-500 hover:bg-brown-500 text-white px-2 py-2 rounded-md font-medium transition-colors duration-300">Delete</button>
</div>
    </div>
   
</div>

 {/* Header*/}   
 
{/*Term and rule*/}
      
         <div className="w-[540px] h-[722px]  bg-neutral-100 rounded-[10px] top-20 right-11 mr-5  absolute" >
    <div className="left-[21px] top-[21px] absolute justify-start items-center gap-3.5 inline-flex">
        <div className="w-6 h-6 relative" />
        <div className="text-center text-zinc-700 text-base font-bold font-['Inter']">TERMS AND RULE</div>
    </div>
    <div className="left-[21px] top-[75px] absolute justify-start items-start gap-2.5 inline-flex">
        <div className="w-5 h-5 relative" />
        <div className="w-[454px] text-zinc-700 text-xs font-medium font-['Inter']">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
    </div>
    <div className="left-[21px] top-[170px] absolute justify-start items-start gap-2.5 inline-flex">
        <div className="w-5 h-5 relative" />
        <div className="w-[454px] text-zinc-700 text-xs font-medium font-['Inter']">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
    </div>
    <div className="left-[21px] top-[265px] absolute justify-start items-start gap-2.5 inline-flex">
        <div className="w-5 h-5 relative" />
        <div className="w-[454px] text-zinc-700 text-xs font-medium font-['Inter']">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
    </div>
    <div className="left-[21px] top-[360px] absolute justify-start items-start gap-2.5 inline-flex">
        <div className="w-5 h-5 relative" />
        <div className="w-[454px] text-zinc-700 text-xs font-medium font-['Inter']">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
    </div>
    <div className="left-[21px] top-[455px] absolute justify-start items-start gap-2.5 inline-flex">
        <div className="w-5 h-5 relative" />
        <div className="w-[454px] text-zinc-700 text-xs font-medium font-['Inter']">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
    </div>
    <div className="px-4 py-2 left-[354px] top-[660px] absolute bg-slate-900 rounded-md justify-center items-center gap-2.5 inline-flex">
    <button className="w-[125px] h-[23px] bg-slate-900 text-white text-sm font-medium font-['Inter'] leading-normal flex items-center justify-center float-start rounded-md">Edit Terms & Rules</button>
    </div>
</div>
      
        
     
  </div>




      
   
   

 
  )
}

export default NotificationManage;

