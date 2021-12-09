import './Image.css'

function Image(props) {
    return (
        <div className="img">
         <img src= {props.image} alt="elon" width="800" height="600"/>
            
        </div>
    )
}

export default Image


