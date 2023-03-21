import React, { useState } from "react";
import "../../styles/index.css"
//create your first component
const Home = () => {
	const [todoList, setTodoList] = useState([]);
	const [task, setTask] = useState("")
	const handleNewTask = (event) => {
		setTask(event.target.value);
	};
	const handleAddTask = (event) => {
		if (event.key === "Enter") {
			const newTask = task;
			const newTodoList = [...todoList, newTask];
			setTodoList(newTodoList);
			setTask("")
			console.log(event)
		}
	}
	const deleteTask = (id) => {
		let NewTodoList = todoList.filter((item, index) => index != id);
		setTodoList(NewTodoList);
	}
	return (
		<div className=" d-flex justify-content-center align-items-center">
			<div className="cardpage" >
				<h1 className="text-center mt-5 todotitle fw-lighter">Todo list</h1>
				<div className="card m-5 fw-lighter paperBackground" >
					<div className="card-body ">
						<ul className="list-group list-group-flush ">
							<input
								className="list-group-item transparentBackground fs-4 borderinput"
								type="text" placeholder="New Task"
								onChange={(event) => { handleNewTask(event) }}
								onKeyDown={(event) => handleAddTask(event)} value={task}>
							</input>
							{todoList.map((task, index) => {
								return (
									<li className="list-group-item transparentBackground d-flex justify-content-between fs-4" key={`${task}-${index}`}>
										{task}<button type="button" className="transparentBackground borderNone buttonHover fs-4" onClick={() => deleteTask(index)}><i className="fas fa-times buttonHover"></i></button>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="card-footer fs-5 fw-bolder">{todoList.length} pending tasks</div>
				</div>

			</div>
		</div>
	);
};

export default Home;
