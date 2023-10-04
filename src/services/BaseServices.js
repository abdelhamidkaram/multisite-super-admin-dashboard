import axios from "axios";

class BaseServices {
  baseUrl = "https://www.motkaml.online/wp-json/wp/v2/";
  constructor(getallEndpoint , postEndpoint , deleteEndpoint ,updateEndpoint){
    this.getallEndpoint = getallEndpoint ;
    this.postEndpoint = postEndpoint ;
    this.deleteEndpoint =deleteEndpoint;
    this.updateEndpoint =updateEndpoint;
  };

  getData = async (endPoint , args) => {
    try {
    return await axios.get(this.baseUrl + endPoint , {params:args});
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  getAllData = async (args) => {
    try {
    return  await axios.get(this.baseUrl + this.getallEndpoint , {params:args});
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  postData = async ( endPoint , body) => {
    try {
        var  url = this.baseUrl + endPoint ;
        if(endPoint != null){
           url = this.baseUrl + this.updateEndpoint ;
        }
      return await axios.post(url , body);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  deleteData = async (id) => {
    try {
      return await axios.delete(this.baseUrl + this.deleteEndpoint ,id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  putData = async ( endPoint , body) => {
    try {
        var  url = this.baseUrl + endPoint ;
        if(endPoint != null){
           url = this.baseUrl + this.updateEndpoint ;
        }
      return await axios.put( url ,body);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

}

export default BaseServices;
