import React, { useEffect, useState } from 'react'; // Importing necessary libraries and hooks from React
import './style.css'; // Importing the CSS stylesheet
import { ToastContainer, toast } from 'react-toastify'; // Importing components from react-toastify for notifications
import 'react-toastify/dist/ReactToastify.css'; // Importing the CSS for react-toastify
import { useDispatch, useSelector } from 'react-redux'; // Importing hooks from react-redux for state management
import { addTask, deleteTask, clearLists, editTask } from '../redux/action'; // Importing action creators from redux actions

const Inputodo = () => {
    const [list, setList] = useState([]); // State to hold the list of tasks
    const [input, setInput] = useState(''); // State to hold the value of the input field
    const tasks = useSelector((state) => state.tasks); // Using useSelector to get the tasks from the Redux store
    const dispatch = useDispatch(); // Using useDispatch to get the dispatch function from Redux

    // Function to handle form submission
    const submit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (input === "") {
            toast.error("Enter something in the input field"); // Show error toast if input is empty
        } else {
            dispatch(addTask(input)); // Dispatch the addTask action with the input value
            setInput(''); // Clear the input field
        }
    };

    // useEffect hook to update the list state whenever tasks change
    useEffect(() => {
        setList(tasks); // Set the list state to the current tasks from Redux store
    }, [tasks]);

    return (
        <div className='mains h-100'>
            <div className='h-100 d-flex flex-column align-items-center '>
                <img className='border rounded m-3' 
                    src='https://www.shutterstock.com/image-vector/task-todo-list-pen-clipboard-260nw-2131972189.jpg' 
                    width={'200px'} height={'200px'} 
                    alt='Todo-Pic' // Image for the ToDo list
                />
                <form onSubmit={submit}> {/* Form for adding new tasks */}
                    <div className="input-group mb-3">
                        <input type="text" 
                            className="form-control border border-end-none" 
                            placeholder="Add Task..." 
                            value={input} 
                            onChange={(e) => setInput(e.target.value)} // Update the input state on change
                            aria-label="Recipient's username" 
                            aria-describedby="button-addon2" 
                        />
                        <button className="btn bg-light border border-start-none" 
                            type="Submit" 
                            id="button-addon2">
                            <i className="add-btn fa-solid fa-plus"></i> {/* Button to submit the form */}
                        </button>
                    </div>
                </form>
                <ToastContainer /> {/* Container to show toast notifications */}
            </div>
        </div>
    );
};

export default Inputodo; // Exporting the Inputtodo component as default
