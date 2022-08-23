import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"



const Blog = () => {
    
      
    const [tasks, setTasks] = useState([])
    
    useEffect(() => {
        const q = query(collection(db, 'wishes'), orderBy('created', 'desc'))
        onSnapshot(q, (querySnapshot) => {
          setTasks(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        })
      },[])
  return (
    
        <div className="row">
      {tasks.map((task) => (
        <div className="col-md-6" key={task.id}>
          
        <h5> {task.data.title}</h5>
        <p>{task.data.content}</p>
        </div>
        ))}
      </div>
    
  )
}

export default Blog