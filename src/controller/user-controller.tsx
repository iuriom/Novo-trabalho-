import React from 'react';
import UserModel from '../model/user-model';
import { postUserData } from '../service/user-http-service';
import { Props, ControllerState } from '../types/types';
import UserView from '../view/user-view';

class UserController extends React.Component<Props, ControllerState> {
  constructor(props) {
    super(props);
    this.state = {name: '', email: '', message: '', age: '', adress: '', birthday:'', phonenumber:'',cpf:'', schooling:'', bloodType:'',  formSent: false}
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value } as Pick<ControllerState, keyof ControllerState>);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const userModel  = { name: this.state.name, email: this.state.email, message: this.state.message, age: this.state.age, adress: this.state.adress, birthday: this.state.birthday, phonenumber: this.state.phonenumber, cpf: this.state.cpf, schooling: this.state.schooling, bloodType: this.state.bloodType } as unknown /* esse unknow recomendação para não dar erro*/as UserModel;

    postUserData(userModel)
    .then(response => {
      console.log(response);
      if(response.status == 201){
        this.setState({name:this.state.name, email:this.state.email, message:this.state.message, age:this.state.age,  adress:this.state.adress,  birthday:this.state.birthday,  phonenumber:this.state.phonenumber,  cpf:this.state.cpf, schooling: this.state.schooling, bloodType:this.state.bloodType, formSent: true});
      }
    });
  }

  render() {
    const { name, email, message, age, adress, birthday, phonenumber, cpf, schooling, bloodType, formSent,} = this.state;
    const userModel = { name, email, message, age, adress, birthday, phonenumber, cpf, schooling, bloodType}

    return (
      <UserView
        name={userModel.name}
        email={userModel.email}
        message={userModel.message}
        age={userModel.age}
        adress={userModel.adress}
        birthday={userModel.birthday}
        phonenumber={userModel.phonenumber}
        cpf={userModel.cpf}
        schooling={userModel.schooling}
        bloodType={userModel.bloodType}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        formSent={formSent}
      />
    );
  }
}

export default UserController;
