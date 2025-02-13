import { useState } from "react";
import axios from 'axios';

function Register() {
    const [name,setName]=useState("");
    const [email,setEmail] = useState("");
    const [password,setpassword] = useState("");
    async function HandleOnSubmit(e){
        e.preventDefault();
        console.log(name,email,password);
        const formData = {name, email,password};
        const response = await axios.post(`http://localhost:2000/CU`,formData);
        console.log(response);
    }
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={HandleOnSubmit}>
                            <div className="mt-3">
                                <label className="form-label">Name: </label>
                                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control"/> 
                            </div>
                            <div className="mt-3">
                                <label className="form-label">Email: </label>
                                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control"/> 
                            </div>
                            <div className="mt-3">
                                <label className="form-label">PassWord: </label>
                                <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} className="form-control"/> 
                            </div>
                            <div className="mt-3">
                                
                                <input type="submit" value="Submit" className="form-control btn btn-primary"/> 
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
        
    </div>
  );
}

export default Register;
