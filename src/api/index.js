import {generate} from '../utils/apiGenerator';
import hello from './hello';

let api = {
  hello
};

export default generate(api);
