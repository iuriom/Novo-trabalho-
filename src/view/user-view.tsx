import React from 'react';
import { ViewProps, ViewState } from '../types/types';

class UserView extends React.Component<ViewProps, ViewState> {
  render() {
    const { name, email, message, handleChange, handleSubmit, formSent, age, adress, birthday, phonenumber, cpf, schooling, bloodType } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            type="age"
            name="age"
            value={age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="adress">Adress:</label>
          <input
            id="adress"
            type="adress"
            name="adress"
            value={adress}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="birthday">Birthday:</label>
          <input
            id="birthday"
            type="birthday"
            name="birthday"
            value={birthday}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phonenumber">Phonenumber:</label>
          <input
            id="phonenumber"
            type="phonenumber"
            name="phonenumber"
            value={phonenumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cpf">Cpf:</label>
          <input
            id="cpf"
            type="cpf"
            name="cpf"
            value={cpf}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="schooling">Schooling:</label>
          <input
            id="schooling"
            type="schooling"
            name="schooling"
            value={schooling}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="bloodType">BloodType:</label>
          <input
            id="bloodType"
            type="bloodType"
            name="bloodType"
            value={bloodType}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
        <span>{formSent?'Formulário enviado com sucesso!':''}</span>
      </form>
    );
  }
}

export default UserView;
