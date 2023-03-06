import React, { useEffect, useState } from 'react'



const ListItems = props =>{
    const {items, deleteTeacher} = props
    const {name} = items

    const onDeleteTeacher = ()=>{
        deleteTeacher(items.id)
        const deleteAPIUrl = `http://localhost:1337/api/teachers/${items.id}`
        const options = {
            method:"DELETE"
        }
        fetch(deleteAPIUrl, options)
        .then((res) =>res.json())
        .then (data=> console.log(data))
        .catch(()=>{})
    }

    return(
        <li className='list-items'>
            <div>
                <h4>{name}</h4>
            </div>
            <div>
                <button>Edit</button>
                <button>View</button>
                <button onClick={onDeleteTeacher}>delete</button>
            </div>
        </li>
    )
}


export default function Delete() {

    // const initialTableData =   [
    //                         {name:"Vipin", id:34},
    //                         {name:"Devanand", id:55},
    //                         {name:"Manish", id:12},
    //                         {name:"Deepak", id:1},
    //                         {name:"Vishnu", id:9},
    //                     ]

    const [tableData, setTableData] = useState([])

    useEffect(()=>{
        const url = "http://localhost:1337/api/teachers"
        fetch(url)
        .then(res => res.json())
        .then((data) =>{
            const newTeacherData = data.data.map((eachCv) =>{
                return ({name: eachCv.attributes.name, id:eachCv.id})
            })
            console.log(data.data)
            setTableData([...newTeacherData])
        })        

    },[])


    const newDeletedTeacher = (id)=>{
        console.log(id)
        const newTeacherList = tableData.filter(newData=> newData.id !== id)
        setTableData([...newTeacherList])  
    }


  return (
    <>
        {
            tableData.length < 1 ? <h1>No data to show</h1>
            :
            (
                <ul className='list-style'>
                    {
                        tableData.map((cv, idx)=>(
                            <ListItems items={cv} key={idx} deleteTeacher={newDeletedTeacher} />
                        )
                    )}
                </ul>
            ) 
        }
    </>
  )
}
