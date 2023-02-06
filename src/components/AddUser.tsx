import React,{useState} from 'react'
import { createUser } from '../api/Requests';
import {toast} from 'react-hot-toast'


interface prop{
    edit:boolean
}

const AddUser:React.FC<prop> = ({edit}) => {
    interface FormData{
        firstName:string;
        lastName:string;
        phoneNumber:number;
        age:number;
    }
    const [formData,setFormData]=useState<FormData>({firstName:'',lastName:'',phoneNumber:0,age:0});
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.type === 'number' ? parseInt(event.target.value) : event.target.value;
        setFormData({ ...formData, [event.target.name]: value });
      };

      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const addUser=async()=>{
            const response:any=await createUser(formData);
            toast.success(response.data.message)
            
        }
        addUser();

      };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
    {!edit&&<div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
    <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
        New User
    </h1>
    <form className="mt-6" onSubmit={handleSubmit}>
        <div className="mb-2">
            <input
            required
            type="text"
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
            type="number"
            // value={formData.phoneNumber}
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
            // value={formData.age}
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

        <div className="mb-6">
        <button
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
        </button>
        </div>
        <div></div>
    </form>
    </div>}
    </div>
  )
}

export default AddUser