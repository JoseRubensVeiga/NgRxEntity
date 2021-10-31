import { environment } from './environment';

const baseURL = environment.baseURL;

export default {
  books: `${baseURL}/books`,
};
