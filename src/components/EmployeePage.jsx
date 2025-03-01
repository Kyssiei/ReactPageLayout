import Header from './Header'

function EmployeePage(props) {
    return(
        <div style={{border: "3px solid rgb(255, 201, 39)", padding: "5px", width: "40%"}}>
            <Header text="Employee" style={{border: "3px solid rgb(72, 176, 221)", width:"100%", height: "40px"}}></Header>
        </div>
    )
}

export default EmployeePage;