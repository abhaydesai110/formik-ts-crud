export interface IPersonInitialState {
  registerInitialState: {
    loading: boolean;
    hasError: boolean;
    data: any;
  };
  deleteInitialState: {
    loading: boolean;
    hasError: boolean;
    data: any;
  };
  getPersonInitialState:{
    loading: boolean;
    hasError: boolean;
    data: any;
  }
  getAllPersonInitialState:{
    loading: boolean,
    hasError: boolean,
    data: any,
  }
  updateInitialState:{
    loading: boolean,
    hasError: boolean,
    data: any,
  }
  values:number
}

export interface IRegistration {
  email: string;
  password: string;
  confirmPassword: string;
  modeOfContact: string;
  phone: string;
  skills: [];
}
