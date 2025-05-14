import GreetUser from './greetUser'
import PremiumUser from './PremiumUser'
import TaskList from './TaskList'
import CurrentDay from './CurrentDay'

function Main() {
    return (
        <>
        <div>
            <CurrentDay />
            <GreetUser />
            <PremiumUser />
            <TaskList />
        </div>
        </>
    )
}
export default Main