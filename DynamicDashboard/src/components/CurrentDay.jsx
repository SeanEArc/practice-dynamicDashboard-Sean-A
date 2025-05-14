const CurrentDay = () =>{
    const today = new Date().toLocaleDateString()
    return(
        <div>
            <h2> Today's Date </h2>
            <p>{today}</p>
        </div>
    )
}

export default CurrentDay