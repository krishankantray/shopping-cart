import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/item';

class ProductService {
  
  allItemsList() {
    return axios.get(API_URL, { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new ProductService();
