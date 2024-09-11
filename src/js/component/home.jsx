import React, { useEffect } from "react";
import { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	    // Define the initial array state
		const [task, setTask] = useState(["You Need To Add New Task on The Task List"]);
		const [inputValue, setInputValue] = useState("");
		const [edit,setEdit]=useState(null);
		const [delet,setDelete]=useState(null);
		// Event handler for updating the array
		const handleArrayADD = (evt) => {
			if(evt.key==="Enter"){
				if (inputValue.trim() !== '') {
					// Add a new element at the end of the array
					if(edit==null){
						const newTask = [...task, inputValue];
						// Update the array state
						setTask(newTask);
						// Clear the input field
						setInputValue("");
					}
					else{
						const index =  parseInt(edit);
						const newTask = [
							...task.slice(0, parseInt(index)),
							inputValue,								
							...task.slice( parseInt(index) + 1) 
						  ];
						setTask(newTask);  
						setInputValue("");
						setEdit(null);  
					}
				}
				else{
					setEdit(null);
				}
			}
			
		};
		useEffect(()=>{
				if(edit!=null){
					setInputValue(task[edit]);
				}
				if(delet!=null){
					const index =parseInt(delet);
					const newTask = [
						...task.slice(0, parseInt(index)), 
						...task.slice( parseInt(index) + 1) 
					];
					setTask(newTask); 
					setInputValue("");
					setEdit(null); 
					setDelete(null); 
				}
		},[edit,delet]
		);

		return (
			
			<div className="container d-grid justify-content-center">
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
																	{t} 	
															</div>
															<div className="img flex-container" hidden={index==0?true:false}>
																	<i onClick={()=>setDelete(index)} className="far fa-trash-alt"  ></i>
																	<i onClick={()=>setEdit(index)} className="far fa-edit" ></i>
															</div>
													</li> 

									))}
									<li  className="list-group-item list-group-item-secondary">
									{`${task.length-1} Items` }
									</li>
								</ul>
						</div>
						{task.length>1?
						<>
						<div className="pag1 list-group-item-secondary"></div>
						<div className="pag2 list-group-item-secondary"></div>
						</>:""
						}
						
			</div>
		);
};

export default Home;
