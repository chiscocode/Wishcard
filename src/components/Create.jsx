import React, { useState} from "react";
import {db} from '../firebase';
import { collection, Timestamp, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";



const Create = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');
    const navigate=useNavigate();
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add data to the store
        try{
            await addDoc(collection(db, 'wishes'),{
                title: input,
                content: tasks,
                publish: false,
                created: Timestamp.now()
            })
            setInput('')
        }
    catch(err) {
        alert(err)
    }
    navigate('/dashboard')
}

  return (
    <div>
        <section id="register" className="mt-5 py-5 mb-5 pb-5">
    <div className="container ">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card" style={{width:'100%'}}>
            <div className="card-header bg-primary text-white">
              <h4>
              Make a wish</h4>
            </div>
            <div className="card-body pato">
                <form onSubmit={handleSubmit} className='addTask' name="addTask">   
                <div className="form-group">
                <label htmlFor="title">Title</label>
                    <input type="text" className='form-control' placeholder="Title" 
                    required value={input} onChange={e => setInput(e.target.value)} />
                </div>
                     <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea  name="content" value={tasks} onChange={e => setTasks(e.target.value)} className='form-control' type="text" placeholder="write your content here" 
                            rows="10" cols="150" required >
                        </textarea>
                    </div>
                    

                    <button  type="submit" className="btn btn-primary mt-4">Submit</button>
                </form>
                
              
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    </div>
  )
}

export default Create