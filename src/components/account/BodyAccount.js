import React from 'react'

function BodyAccount() {
  return (
    <div>
      <p class='py-3 px-5 border-b-2 border-gray text-xl font-bold tracking-tight text-gray-900'>My Profile</p>
                <div class='my-5 px-5 flex flex-row items-center bg-white'>
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                  alt="" 
                  class="w-28 h-28 rounded-full border-4 border-gray-700 my-0 mr-4" />
                  <div>
                    <h1 class="text-2xl font-bold tracking-tight text-gray-900">Julian Benedict</h1>
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