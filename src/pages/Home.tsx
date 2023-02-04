import React, { useEffect, useState } from 'react'
import { deleteUser, getUsers } from '../api/Requests'
import AddUser from '../components/AddUser'
import UpdateUser from '../components/UpdateUser'
import {toast} from 'react-hot-toast'

const Home:React.FC = () => {
    const [users,setUsers]=useState<Array<any>>([])
    const [newUser,setNewUser]=useState<boolean>(false);
    const [edit,setEdit]=useState<boolean>(false);
    const [val,setVal]=useState<unknown>();
    const [refresh,setRefresh]=useState<boolean>(false)
    useEffect(()=>{
        const fetchUsers=async()=>{
            const {data}=await getUsers();
            console.log(data)
            setUsers(data.data)
            console.log(users)


        }
        fetchUsers()
    },[refresh])
    const handleDelete=async(id:any)=>{
        const response:any=await deleteUser(id);
        console.log(response.data.message);
        toast.error(response.data.message);
        setRefresh((pre:any)=>!pre)
    }
    const handleEdit=async(id:any)=>{
        setVal(id)
        setEdit((pre:any)=>!pre)
    }
    const handleBack=()=>{
        setNewUser((pre:any)=>!pre)
        setRefresh((pre:any)=>!pre)
    }
  return (
    <div>
        <div className='flex flex-row justify-between'>
        <h1 className='text-4xl m-5 font-thin'>Dashboard</h1>
        {!newUser?
        <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 my-2 mx-4 px-4 border border-blue-500 hover:border-transparent rounded'onClick={()=>setNewUser((pre:any)=>!pre)}>Add +</button>
        :
        <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 my-2 mx-4 px-4 border border-blue-500 hover:border-transparent rounded'onClick={handleBack}>Back</button>
        
    }
        </div>
    {edit?<UpdateUser id={val} setEdit={setEdit}/>:null}
        {!newUser&&!edit?
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
        <td className="border px-4 py-2 flex  space-x-2">
          <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={()=>handleEdit(val._id)}>View</button>
          <button className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded' onClick={()=>handleDelete(val._id)}>Delete</button>

        </td>
      </tr> 
    })}
  </tbody>
</table>:<AddUser edit={edit}/>
        }
    </div>


  )
}

export default Home