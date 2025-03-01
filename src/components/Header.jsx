

function Header(props){
    return(
        <div style={{border: "3px solid rgb(72, 176, 221)", width:"100%", height: "40px"  }}>
            <h1 style={{fontSize: "20px", textAlign:"center", fontFamily:"Arial, sans-serif"}}>{props.text}</h1>
        </div>
    );
}

export default Header