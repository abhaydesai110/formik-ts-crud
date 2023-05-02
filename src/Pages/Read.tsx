// import { useEffect, useState } from 'react'
// import axios from "axios"
// import { RegisterProps } from './Register.model'

// const Read = () => {
//     const [apiData, setApiData] = useState([])

//     const getData = () => {
//         axios.get("https://642d40fbbf8cbecdb40124eb.mockapi.io/AxiosCRUD").then((response) => {
//             console.log(response.data);
//             setApiData(response.data)
//         })
//     }

//     const handleDelete = (id: RegisterProps) => {
//         console.log(id)
//         axios.delete(`https://642d40fbbf8cbecdb40124eb.mockapi.io/AxiosCRUD/${id}`).then(() => {
//             getData()
//         })
//     }


//     useEffect(() => {
//         getData()
//     }, [])

//     return (
//         <>
//             <div className='readTable'>
//                 <table>
//                     <tr>
//                         <th>
//                             ID
//                         </th>
//                         <th>
//                             Email
//                         </th>
//                         <th>
//                             Password
//                         </th>
//                         <th>
//                             Confirm Password
//                         </th>
//                         <th>
//                             Mode of Contact
//                         </th>
//                         <th>
//                             Skills
//                         </th>
//                         <th>
//                             Phone Number
//                         </th>
//                     </tr>
//                     {
//                         apiData.map((item: RegisterProps) => {
//                             console.log('item', item)
//                             return (
//                                 <>
//                                     <tr>
//                                         <td>
//                                             {item.id}
//                                         </td>
//                                         <td>
//                                             {item.email}
//                                         </td>
//                                         <td>
//                                             {item.password}
//                                         </td>
//                                         <td>
//                                             {item.confirmPassword}
//                                         </td>
//                                         <td>
//                                             {item.modeOfContact}
//                                         </td>
//                                         <td>
//                                             {item.skills}
//                                         </td>
//                                         <td>
//                                             {item.phone}
//                                         </td>
//                                     </tr>
//                                     <button className='button' onClick={() => handleDelete(item.id)}>Delete</button>
//                                 </>

//                             )
//                         })
//                     }

//                 </table>
//             </div>
//         </>
//     )
// }

// export default Read
export { }