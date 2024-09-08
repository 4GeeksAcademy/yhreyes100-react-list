import React from "react";
import { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	    // Define the initial array state
		const [task, setTask] = useState(["You Need To Add New Task on The Task List"]);
		const [inputValue, setInputValue] = useState("");
		// Event handler for updating the array
		const handleArrayADD = (evt) => {
			if(evt.keyCode===13){
				if (inputValue.trim() !== '') {
					// Add a new element at the end of the array
					const newTask = [...task, inputValue];
		
					// Update the array state
					setTask(newTask);
		
					// Clear the input field
					setInputValue("");
				}
			}
		};
		const handleArrayUpdate=(evt)=>{
			console.log(task);
		}
		const handleArrayDelete=(evt)=>{
			console.log(evt);
			const index =parseInt(evt.target.id);
			const newTask = [
				...task.slice(0, parseInt(index)), // Elements before the one to delete
				...task.slice( parseInt(index) + 1) // Elements after the one to delete
			  ];
			  setTask(newTask); // Triggers a re-render with the new array
		}
		return (
			
			<div className="container d-grid justify-content-center">
				{/* Input field to enter new elements */}
				
	
	
				{/* Display the current array */}
				{/*<div>Array: {JSON.stringify(array)}</div>*/}

				
						<div className="list">
								<ul className="list-group ">
									<li className="list-group-item list-group-item-secondary">
									<input
									type="text"
									value={inputValue}
									onChange={(e) => setInputValue(e.target.value)}
									placeholder="Enter a task"
									onKeyDown={handleArrayADD}
									
								/>
									</li>
									{
									task.map((t,index)=>(
									
													<li key={index} className={`list-group-item list-group-item-secondary ${index==0?"first":"flex-container"}`} >
															<div className={index==0?"":"text"}>
																	{index==0?t:<input type="text" value={t}  disabled />} 	
															</div>
															<div className="img flex-container" hidden={index==0?true:false}>
																	<i id={index} onClick={handleArrayDelete} className="far fa-trash-alt"  ></i>
																	<i id={index} onClick={handleArrayUpdate} className="far fa-edit" ></i>
															</div>
													</li> 

									))}
									<li  className="list-group-item list-group-item-secondary">
									{`${task.length-1} Items` }
									</li>
								</ul>
						</div>
						<div className="pag1 list-group-item-secondary"></div>
						<div className="pag2 list-group-item-secondary"></div>
			</div>
		);
};

export default Home;
