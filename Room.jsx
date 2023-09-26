import React from 'react'

function Room({username, room, setUsername, setRoom, setChatScreen, socket}) {

  const sendRoom = () => {
    socket.emit('room', room)
    setChatScreen(true)
  }

  return (
    <div className='flex items-center justify-center h-full'>
      <div className='w-1/3 h-[350px] bg-indigo-400 rounded flex flex-col space-y-4 p-3'>
        <h1 className='font-bold text-center text-2xl my-4'>Welcome To Chat</h1>
        <input value={username} onChange={e => setUsername(e.target.value)} className='h-10 rounded-[5px] p-3 outline-none' type="text" placeholder='Username'/>
        <input  value={room} onChange={e => setRoom(e.target.value)} className='h-10 rounded-[5px] p-3 outline-none' type="text" placeholder='Room' />
        <div onClick={sendRoom}className='hover:opacity-70 tracking-wider rounded-xl text-center text-lg pt-1 align-middle h-10 bg-indigo-600 text-white cursor-pointer'>JOIN</div>
      </div>
    </div>
  )
}

export default Room