import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where, orderBy} from "firebase/firestore";
import Blog from "./Blog"

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);


  return (
    <div className='container text-black'>
      <div style={{display: 'flex',flexDirection: 'column',textAlign: 'center',backgroundColor: '#dcdcdc',padding: '30px'}}>
        Logged in as
         <div>{name}</div>
         <div>{user?.email}</div>
      
      </div>
      <Link to='/create-wish' className="btn btn-primary mb-4 mt-4 me-4">Add a wishlist</Link>
      <button onClick={logout} className="btn btn-danger mb-4 mt-4">Logout</button>
      <Blog/>
    </div>
  )
}

export default Dashboard;