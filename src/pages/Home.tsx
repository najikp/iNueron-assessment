import React, { useEffect, useState } from 'react'
import { deleteUser, getUsers } from '../api/Requests'
import AddUser from '../components/AddUser'

const Home:React.FC = () => {
    const [users,setUsers]=useState<Array<any>>([])
    const [newUser,setNewUser]=useState<boolean>(false)
    useEffect(()=>{
        const fetchUsers=async()=>{
            const {data}=await getUsers();
            console.log(data)
            setUsers(data.data)
            console.log(users)


        }
        fetchUsers()
    },[])
    const handleDelete=async(id:any)=>{
        const response=await deleteUser(id);
        console.log(response);
    }
  return (
    <div>
        <div className='flex flex-row justify-between'>
        <h1 className='text-4xl m-5 font-thin'>Dashboard</h1>
        {!newUser?
        <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 my-2 mx-4 px-4 border border-blue-500 hover:border-transparent rounded'onClick={()=>setNewUser((pre:any)=>!pre)}>Add +</button>
    :
    <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 my-2 mx-4 px-4 border border-blue-500 hover:border-transparent rounded'onClick={()=>setNewUser((pre:any)=>!pre)}>Back</button>

    }
        </div>
        {!newUser?
        <table className="table-auto w-full text-left">
  <thead>
    <tr className="bg-gray-800 text-white">
      <th className="px-4 py-2">First Name</th>
      <th className="px-4 py-2">Last Name</th>
      <th className="px-4 py-2">Phone Number</th>
      <th className="px-4 py-2">Age</th>
      <th className="px-4 py-2">Actions</th>
      
    </tr>
  </thead>
  <tbody>
    {users.map((val:any)=>{
        return <tr className="bg-gray-100">
        <td className="border px-4 py-2">{val.firstName}</td>
        <td className="border px-4 py-2">{val.lastName}</td>
        <td className="border px-4 py-2">{val.phoneNumber}</td>
        <td className="border px-4 py-2">{val.age}</td>
        <td className="border px-4 py-2 space-x-2">
          <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Edit</button>
          <button className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded' onClick={()=>handleDelete(val._id)}>Delete</button>
        </td>
      </tr>
    })}
  </tbody>
</table>:<AddUser/>
        }

    </div>
  )
}

export default Home