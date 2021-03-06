import { React, Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "My react app",
      employeeData: [],
      employeeData1: [],
      act: 0,
      index: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let employeeData = this.state.employeeData;
    let name = this.refs.txtName.value;
    let age = this.refs.txtAge.value;

    if (this.state.act === 0) {
      let newEmployee = {
        "name": name,
        "age": age
      }
      employeeData.push(newEmployee);
    }
    else {
      let index = this.state.index;
      employeeData[index].name = name;
      employeeData[index].age = age;
    }

    this.setState({
      employeeData: employeeData,
      act: 0
    })
    console.log(employeeData)


    this.refs.myForm.reset();

  }

  handleEdit = (i) => {
    let employeeData1 = this.state.employeeData[i];
    this.refs.txtName.value = employeeData1.name;
    this.refs.txtAge.value = employeeData1.age;

    this.setState({
      employeeData1: employeeData1,
      act: 1,
      index: i
    })

  }
  handleDelete = (i) => {
    let employeeData = this.state.employeeData;
    employeeData.splice(i, 1);
    this.setState({
      employeeData: employeeData
    });
  }
  render() {
    let employeeData = this.state.employeeData;
    return (
      <div>
        <h1>{this.state.title}</h1>
        <form ref="myForm" className="">
          <label>Name</label>
          <input type="text" ref="txtName" placeholder="Enter Name" className="formfield" />
          <label>Age</label>
          <input type="text" ref="txtAge" placeholder="Enter Age" />
          <button onClick={e => this.handleSubmit(e)}>Save</button>
        </form>
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
          {
            employeeData && employeeData !== null ? employeeData.map((data, i) =>
              <tr key={i}>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>
                  <button onClick={e => this.handleEdit(i)}> Edit</button>
                </td>
                <td>
                  <button onClick={e => this.handleDelete(i, 1)}>Delete</button>
                </td>
              </tr>
            ) : ''
          }
        </table>
      </div>
    )
  }


}

export default App;