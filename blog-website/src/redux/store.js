import { legacy_createStore as createStore} from 'redux'
import blogReducer from './reducer/blogReducer';

const store = createStore(blogReducer);

export default store;
