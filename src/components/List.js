import React, { useEffect, useState } from 'react'; // Importing necessary libraries and hooks from React
import './style.css'; // Importing the CSS stylesheet
import { ToastContainer, toast } from 'react-toastify'; // Importing components from react-toastify for notifications
import 'react-toastify/dist/ReactToastify.css'; // Importing the CSS for react-toastify
import { useDispatch, useSelector } from 'react-redux'; // Importing hooks from react-redux for state management
import { addTask, deleteTask, clearLists, editTask } from '../redux/action'; // Importing action creators from redux actions

const Listtodo = () => {
    const [list, setList] = useState([]); // State to hold the list of tasks
    const [key, setKey] = useState(); // State to hold the key of the task being edited
    const [change, setChange] = useState(''); // State to hold the new value of the task being edited
    const tasks = useSelector((state) => state.tasks); // Using useSelector to get the tasks from the Redux store
    const dispatch = useDispatch(); // Using useDispatch to get the dispatch function from Redux

    // Function to handle editing a task
    const edit = (key, inp) => {
        const newarr = dispatch(editTask(key, inp)); // Dispatching editTask action with the key and new value
        console.log(newarr); // Logging the new array after editing
        setKey(); // Resetting the key state
        setChange(''); // Resetting the change state
    };

    // Function to clear the task list
    const clearList = () => {
        if (list.length === 0) {
            toast.info("List is already empty"); // Show info toast if list is already empty
        } else {
            dispatch(clearLists()); // Dispatching clearLists action to clear the task list
            console.log(list); // Logging the list
        }
    };

    // Function to delete a task
    const del = (key) => {
        dispatch(deleteTask(key)); // Dispatching deleteTask action with the key of the task to be deleted
    };

    useEffect(() => {
        setList(tasks); // Updating the list state whenever tasks change
    });

    return (
        <div className='mains h-100'>
            <div className='h-100 d-flex flex-column align-items-center '>
                {list.length !== 0 ? (
                    // Mapping over the list of tasks
                    list.map((data, key) => {
                        return (
                            <div key={key} className='m-2 d-flex align-items-center justify-content-between border border-danger rounded data bg-light'>
                                <h3 className='dates ms-2'>{data}</h3>
                                <div className='d-flex ms-2'>
                                    <i onClick={() => del(key)} className="trash me-2 fs-3 fa-solid fa-trash-can"></i>
                                    <i data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { setKey(key); setChange(data) }} className="edit me-2 fs-3 fa-solid fa-pen-to-square"></i>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    ""
                )}
                <button onClick={clearList} className="btn btn-warning text-dark btn-outline-secondary" type="Submit" id="button-addon2">Clear List</button>
                <ToastContainer />

                {/* Modal for editing tasks */}
                <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog border border-warning border-3 rounded">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body ">
                                <input type="text" className="form-control border border-end-none" placeholder="Add Task..." value={change} onChange={(e) => setChange(e.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2" />
                            </div>
                            <div className="modal-footer">
                                <button onClick={() => edit(key, change)} data-bs-dismiss="modal" type="button" className="btn btn-primary">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Listtodo; // Exporting the Listtodo component as default
