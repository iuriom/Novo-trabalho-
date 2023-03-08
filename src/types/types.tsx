export interface Props{

}

export interface ControllerState{
    name: string;
    email: string;
    message: string;
    formSent: boolean;
    age: string;
    adress: string;
    birthday: string;
    phonenumber: string;
    cpf: string;
    schooling: string;
    bloodType: string;
}

export interface ViewState{
    name: string;
    email: string;
    message: string;
    age: string;
    adress: string;
    birthday: string;
    phonenumber: string;
    cpf: string;
    schooling: string;
    bloodType: string;
    handleChange: any; 
    handleSubmit: any;
}

export interface ViewProps{
    name: string;
    email: string;
    message: string;
    age: string;
    adress: string;
    birthday: string;
    phonenumber: string;
    cpf: string;
    schooling: string;
    bloodType: string;
    handleChange: any; 
    handleSubmit: any;
    formSent: boolean;
}

export interface HttpResponse{
    message: string;
    status: number;
    data: any

}