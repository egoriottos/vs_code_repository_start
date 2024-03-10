type ButtonProps = {
    text:string
}


const Car: React.FC<ButtonProps> = ({text}) =>{
    
    return(
        <>
            <button>{text}</button>
            <button>{text}</button>
            <button>{text}</button>
            <button>{text}</button>
            <button>{text}</button>
            <button>{text}</button>
            <button>{text}</button>
            <button>{text}</button>
            <button>{text}</button>
            <button>{text}</button>
        </>    
        
    )
}




export default Car