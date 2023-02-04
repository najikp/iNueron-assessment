import React, { useEffect, useState } from 'react'
import { getUser, updateUser } from '../api/Requests'
import {toast} from 'react-hot-toast'

interface prop{
    id:unknown
    setEdit:any
}

const UpdateUser:React.FC<prop> = ({id,setEdit}) => {
    interface FormData{
        firstName:string;
        lastName:string;
        phoneNumber:number;
        age:number;
    }
    const [formData,setFormData]=useState<FormData>({firstName:'',lastName:'',phoneNumber:0,age:0});
    const [update,setUpate]=useState<boolean>(true);
    
    useEffect(()=>{
        const fetchUser=async(id:any):Promise<void>=>{
            const resposne:any=await getUser(id);
            setFormData(resposne.data.data)
            console.log(resposne.data.data)
        }
        fetchUser(id);
        
    },[])
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.type === 'number' ? parseInt(event.target.value) : event.target.value;
        setFormData({ ...formData, [event.target.name]: value });
      };

      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Do something with the form data
        const editUser=async()=>{
            const response:any=await updateUser(formData,id);
            toast.success(response.data.message)
            
        }
        editUser();

      };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
          User Details
        </h1>
        <form className="mt-6" onSubmit={handleSubmit} >
          <div className="mb-2">
              <input
              required
                type="text"
                disabled={update}
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="

            w-full
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Enter Firstname"
              />
          </div>
          <div className="mb-2">
            
              <input
                type="text"
                required
                name="lastName"
                disabled={update}
                value={formData.lastName}
                onChange={handleChange}
                className="

            w-full
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Enter Lastname"
              />
          </div>
          <div className="mb-2">
            
              <input
                name="phoneNumber"
                disabled={update}
                type="number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="
            block
            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Enter Mobile Number"
                required
              />
          </div>
          <div className="mb-2">
            
              <input
                name="age"
                type="number"
                disabled={update}
                value={formData.age}
                onChange={handleChange}
                className="
            block
            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Enter Age"
                required
              />
          </div>

          <div className="mb-6 mt-6">
            <span onClick={()=>setEdit((pre:any)=>!pre)}>Go Back</span>
            {update?<a
              onClick={()=>setUpate((pre:any)=>!pre)}
              className="
            h-10
            p-4
            px-6
            mx-4
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
            >
              Edit
            </a>:<button
              type="submit"
              className="
            h-10
            px-5
            mx-4
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
            >
              Submit
            </button>}
          </div>
          <div></div>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser