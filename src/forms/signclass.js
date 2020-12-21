import React from "react";
import Form from "./signupfunc";

class Form1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      full: {
        name: "full",
        value: "",
        error: "Enter value",
      },
      password: {
        name: "password",
        value: "",
        error: "Enter value",
      },
      checkbox: {
        name: "checkbox",
        value: false,
        error: "Enter value",
      },
    };
  }

  validator = (key, value) => {
    if (!this.state[key].value == "") {
      this.setState({
        [key]: {
          ...this.state[key],
          error: "",
        },
      });
    } else {
      this.setState({
        [key]: {
          ...this.state[key],
          error: "Enter value",
        },
      });
    }
    
  };

  inputHandler = (key, value) => {
    this.setState(
      {
        [key]: {
          ...this.state[key],
          value: value,
          
        },
      },
      () => {
        this.validator(key, value);
      }
    );console.log(this.state);
  };

  submitHandler = (e) => {
    e.preventDefault();
    // let array = [];
    // Object.keys(this.state).map(function (key, index) {
    //   array.push(key);
    // });
    // console.log(array);
    // for (var i=0;i<array.length;i++){
    //   if (this.state[array[i]].error===""){
    //     this.setState({
    //       [array[i]]: {
    //         ...this.state[array[i]],
    //         error: "Enter value",
    //       },
    //     });
    //   }else{
    //     this.setState({
    //       [array[i]]: {
    //         ...this.state[array[i]],
    //         error: "",
    //       },
    //     })
    //   }
  };

  render() {
    return (
      <React.Fragment>
        <Form
          forminfo={{
            name: this.state.full,
            password: this.state.password,
            checkbox: this.state.checkbox,
          }}
          submitHandler={this.submitHandler}
          inputHandler={this.inputHandler}
          // changehandler={this.changehandler}
        />
      </React.Fragment>
    );
  }
}

export default Form1;
