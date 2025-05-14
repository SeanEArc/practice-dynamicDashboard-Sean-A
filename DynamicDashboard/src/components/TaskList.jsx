
const TaskList = () => {
    const tasks = [
        {
            task : "Learn React",
            completed : false
        },
        {
            task : "Build a website",
            completed : true
        },
        {
            task : "Build a good website",
            completed : false
        }
    ]
    
    return (
        <div>
            <h3>Task List</h3>
            <ul>
                {tasks.map((array) => (
                    <li>
                        {array.task} {array.completed ? "✅" : "❌"}
                    </li>
                ))}
            </ul>
        </div>
    )};

export default TaskList;