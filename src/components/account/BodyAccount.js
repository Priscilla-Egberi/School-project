import React from 'react'

function BodyAccount() {
  return (
    <div>
      <p className='py-3 px-5'>My Profile</p>
      <div className=''>
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
        <div>
          <h1>Julian Benedict</h1>
          <p>17/EG/CO/1035</p>
        </div>
      </div>
      {/* tables */}
      <div className="grid grid-cols-2">
        {/* table1 */}
        <div>
          <h1>Information</h1>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default BodyAccount