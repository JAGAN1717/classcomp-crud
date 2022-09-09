import React, { Component } from "react";
import axios from "axios";
import "./user.css"


class Userdata extends Component{
constructor(){
    super()
    this.handleGetuser = this.handleGetuser.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleupdate = this.handleupdate.bind(this)
    this.hadlechange = this.hadlechange.bind(this)
    this.changeName = this.changeName.bind(this)
    this.changePhone = this.changePhone.bind(this)
    this.changeEmail = this.changeEmail.bind(this)

   this.state = {
    getUser : false,
    getUpdate : "",
    username : "",
    phone : "",
    email :""
   }
}

hadlechange = async(data)=>{
    this.setState({
        getUser : "",
        getUpdate : data,
        username : data.username,
        phone : data.phone,
        email : data.email

    })
}

handleupdate = async() =>{
    let user = {
        username :this.state.username,
        phone : this.state.phone,
        email : this.state.email
    }

    axios.put("http://localhost:7070/user/upadteData",user).then(res=>{
        console.log("res",res.data);
        this.setState({
            getUpdate : res.data.result
        })
        alert("successfully upadted!");
        this.handleGetuser();
    })
}


handleDelete = async(email)=>{

    axios.delete("http://localhost:7070/user/deleteData",{params:{email:email}}).then(res=>{
        console.log("success");
        alert("delete successfull!");
        this.handleGetuser();
    }).catch(err=>{
        console.log("err",err.message)
    })
}

handleGetuser = async() =>{

    axios.get("http://localhost:7070/user/getUser").then(res=>{
        console.log('res',res.data)
        this.setState({
            getUser : res.data.result
        })
    }).catch(err=>{
        console.log("err",err.message);
    })

}


changeName(p){
    this.setState({
        username : p.target.value
    })
}
changePhone(p){
    this.setState({
        phone : p.target.value
    })
}
changeEmail(p){
    this.setState({
        email : p.target.value
    })
}

    render(){

        if(this.state.getUser){
            console.log("state",this.state.getUser)
        return(<>
        <h1>Userdata</h1>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">userName</th>
      <th scope="col">phone</th>
      <th scope="col">email</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
{
    this.state.getUser.map((data,index)=>{

        return(<>
        <tr>
        <th scope="row">{index+1}</th>
        <td>{data.username}</td>
        <td>{data.phone}</td>
        <td>{data.email}</td>
        <td><button className="btn btn-primary" onClick={()=>this.hadlechange(data)}>update</button></td>
        <td><button className="btn btn-danger" onClick={()=>this.handleDelete(data.email)}>Delete</button></td>
      </tr>
        </>)
   
    })
}
  </tbody>
</table>

        </>)

        }else if(this.state.getUpdate){

            return(<>
                     <div className="col-md-5 container">
                      <form>
  <div className="row mb-4">
    <div className="">
      <div className="form-outline">
        <input type="text" className="form-control" value={this.state.username} onChange ={this.changeName} />
        <label className="form-label" >Name</label>
      </div>
    </div>
  </div>
  <div className="row mb-4">
      <div className="form-outline">
        <input type="text" className="form-control" value={this.state.phone} onChange = {this.changePhone} />
        <label className="form-label" >Phone Number</label>
      </div>
    </div>
  
  <div className="form-outline mb-4 ">
    <input type="email"  className="form-control" value={this.state.email} />
    <label className="form-label">Email address</label>
  </div>

  
  <button type="button"  className="btn btn-primary btn-block mb-4" onClick={this.handleupdate}>Update</button>
</form></div>
            
            </>)
        }else{
            return(<>
            
            <button type="button" className="btn btn-primary" onClick={this.handleGetuser}>GetUserDetail</button>
            </>)
        }
    }

}

export default Userdata