
import { RadioButtonWrapper } from "./styled";

interface RadioButtonProps {
    name: string;
    id: string
}

const CategoriesUL: React.FC<RadioButtonProps> = (props) => {
    return (
        <>
            <RadioButtonWrapper>
                <input 
                    type="checkbox"
                    className = "react-switch-checkbox"
                    id = {props.id}
                     />                
                    {props.name}
                
                <label 
                    htmlFor={props.id}
                    className="react-switch-label"
                >
                    <span className={`react-switch-button`} />    
                </label>
            
               
            </RadioButtonWrapper>
        </>
        
    );
}

export default CategoriesUL;