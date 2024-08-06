// import React from 'react'

// const Login = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
//         <h2 className="text-2xl font-bold text-center mb-6">Sign in to your account</h2>
//         <form className="space-y-4">
//           <div>
//             <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Your email</label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               className="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//               placeholder="name@company.com"
//               disabled
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               placeholder="••••••••"
//               className="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//               disabled
//             />
//           </div>
//         </form>
        
//         <div className="my-6 flex items-center justify-center">
//           <hr className="w-full border-gray-300" />
//           <span className="px-3 text-gray-500 bg-white">or</span>
//           <hr className="w-full border-gray-300" />
//         </div>
        
//         <button
//           type="button"
//           className="w-full text-gray-700 bg-white hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center border border-gray-300"
//         >
//           <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
//             <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
//             <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
//             <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
//             <path d="M1 1h22v22H1z" fill="none"/>
//           </svg>
//           Sign in with Google
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Login

import React from 'react'
import OAuth from './OAuth'

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="w-full max-w-md bg-white bg-opacity-90 rounded-lg shadow-md p-8 z-10">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign in to FoodieOrder</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Your email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="name@example.com"
              disabled
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              disabled
            />
          </div>
        </form>
        <div className="my-6 flex items-center justify-center">
          <hr className="w-full border-gray-300" />
          <span className="px-3 text-gray-500 bg-white">or</span>
          <hr className="w-full border-gray-300" />
        </div>
        
        <OAuth/>
       
      </div>
    </div>
  )
}

export default Login