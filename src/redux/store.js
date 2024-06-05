import { createStore } from 'redux'; // Importing the createStore function from Redux
import taskReducer from './reducer'; // Importing the reducer from './reducer'

// Creating a Redux store with the taskReducer
const store = createStore(taskReducer);

export default store; // Exporting the Redux store as default
