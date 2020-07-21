import React, { Component } from "react";
import students from "../data/students.json";

class StudentsList extends Component {
  state = {
    students: students,
    newStudent: "",
  };

  addStudent = () => {
    // this.state.students.push({ firstName: "Bar" });

    // Long method
    const newStudentList = [...this.state.students];
    newStudentList.push({ firstName: this.state.newStudent });

    this.setState({
      students: newStudentList,
      newStudent: "",
    });

    // Cool kids method

    // this.setState({
    //   students: [...this.state.students, { firstName: "Foo" }],
    // });

    // students.push({ firstName: "Hello world" });
    // console.log(students);
  };

  handleChange = (event) => {
    this.setState({
      newStudent: event.target.value,
    });
  };

  handleDelete = (index) => {
    // Cool kids method
    this.setState({
      students: this.state.students.filter((student, i) => i !== index),
    });

    // const newStudentList = [...this.state.students];
    // newStudentList.splice(index, 1);
    // this.setState({
    //   students: newStudentList,
    // });
  };

  render() {
    // const studentList = [];
    // for (let i = 0; i < students.length; i++) {
    //   studentList.push(<div>{students[i].firstName}</div>);
    // }
    // console.log(studentList);
    // return <div>{studentList}</div>;

    return (
      <div>
        <input
          type="text"
          name="firstName"
          onChange={this.handleChange}
          value={this.state.newStudent}
        />
        <button onClick={this.addStudent}>Add student</button>
        {this.state.students.map((student, i) => (
          <div key={i}>
            {student.firstName}{" "}
            <button onClick={(event) => this.handleDelete(i)}>
              Delete student
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default StudentsList;
