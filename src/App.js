import {React, Component} from 'react';


class App extends Component{
   constructor(){
     super();
     this.txtName = React.createRef();
     this.txtAge = React.createRef();
     this.state={
       title : "CRUD App",
       employeeData : [],
       act : 0,
       index : ''
     }
   }

   handleSubmit = (e) => {
     e.preventDefault();
     let employeeData = this.state.employeeData;
     let name = this.refs.txtName.value;
     let age = this.refs.txtAge.value;

     if(this.state.act === 0)
     {
      let newEmployee = {
        "name" : name,
        "age" : age
      }
      employeeData.push(newEmployee);
     }
     else
     {
       let index = this.state.index;
       employeeData[index].name = name;
       employeeData[index].age = age;
     }

     this.setState({
       employeeData : employeeData,
       act : 0
     })
     this.refs.myform.reset();
   }

   handleEdit = (i) => {
      let employeeData = this.state.employeeData[i];
      this.txtName.value = employeeData.name;
      this.txtAge.value = employeeData.age;

      this.setState({
        employeeData : employeeData,
        act : 1, 
        index : i
      })
   }

   handleDelete = (i) => {
     let employeeData = this.state.employeeData;
     employeeData.splice(i,1);
     this.setState({
       employeeData : employeeData
     });
   }

   render(){
     let employeeData = this.state.employeeData;
     return(
       <div>
       <h1>{this.state.title}</h1>
       <form ref="myform">
        <label>Name</label>
        <input type="text" ref={this.txtName} placeholder="Enter Name"/>
        <label>Age</label>
        <input type="text" ref={this.txtAge} placeholder="Enter Age"/>
        <button onClick={e => this.handleSubmit(e)}>Save</button>
       </form>
       <table>
         <tr>
           <th>Name</th>
           <th>Age</th>
         </tr>
         {
           employeeData.map((data, i) =>
           <tr key={i}>
             <td>{data.name}</td>
             <td>{data.age}</td>
             <td>
             <button onClick={e => this.handleEdit(i)}>Edit</button>
             </td>
             <td>
             <button onClick={e => this.handleDelete(i)}>Delete</button>
             </td>
           </tr>
           )
         }
       </table>
       </div>
     )
   }
}

export default App;
