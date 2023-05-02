import axios from "axios";
import { RegisterProps } from "../../Pages/Register.model";

class Person {
  public async register(payload: RegisterProps): Promise<any> {
    return axios.post("http://localhost:5050/add", payload).then((res) => {
      return res.data;
    });
  }
  public async deleteUser(id: number): Promise<any> {
    return axios.delete(`http://localhost:5050/${id}`).then((res) => {
      return res.data;
    });
  }
  public async getPersonData(id: number): Promise<any> {
    return axios.get(`http://localhost:5050/${id}`).then((res) => {
      return res.data;
    });
  }
  public async getAllPersonData(): Promise<any> {
    return axios.get(`http://localhost:5050/all`).then((res) => {
      return res.data;
    });
  }
  public async updateUser(payload: RegisterProps): Promise<any> {
    const id = payload.id;
    delete payload.id;
    return axios.put(`http://localhost:5050/${id}`, payload).then((res) => {
      console.log("res :>> ", res);
      return res.data;
    });
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new Person();
