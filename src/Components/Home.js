import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editStudent, favStudent } from '../Redux/action'
import { deleteStudent } from '../Redux/action'

export default function Home() {

  const studentData = useSelector(state => state.add)
  const navigate =  useNavigate()
  const dispatch = useDispatch()

  return (
    <div>
      <button className='btn btn-success' onClick={() => navigate("/add") }>Add</button>
      <button className='btn btn-success' onClick={() => navigate("/favourite") }>Favourite</button>
      <div className=' d-flex justify-content-center'>
        {
          <table className="table w-75">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Email</th>
                <th scope="col">Batch</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {
                studentData.map((student) => {
                  return (
                    <tr>
                      <th scope="row">{student.name}</th>
                      <td>{student.age}</td>
                      <td>{student.email}</td>
                      <td>{student.batch}</td>
                      <td><i onClick={()=> dispatch(favStudent(student))} className="fa-regular fa-star"></i></td>
                      <td><i onClick={()=> dispatch(deleteStudent(student.id))} className="fa-solid fa-trash"></i></td>
                      <i onClick={()=> navigate(`/edit/${student.id}`)} className="fa-solid fa-pencil"></i>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        }
      </div>
    </div>

  )
}
