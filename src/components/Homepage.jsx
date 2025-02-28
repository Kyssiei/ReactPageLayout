
import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList.jsx';




function Homepage() {
    return(
        <div style={{border: "3px solid rgb(255, 201, 39)", padding: "5px", width: "40%"}}>
            <Header/>
            <SearchBar/>
            <EmployeeList/>

        </div>
    )
}

export default Homepage

