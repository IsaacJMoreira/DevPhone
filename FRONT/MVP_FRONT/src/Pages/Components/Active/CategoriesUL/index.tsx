
import { RadioButtonWrapper } from "./styled";
import React from 'react'
interface RadioButtonProps {
    name: string;
    id: string;
    code: string;
    arrayOfCategories?: string[];
    handleCheckfunction?: ()=> void
}


const CategoriesUL: React.FC<RadioButtonProps> = (props) => {


    return (
        <>
            <RadioButtonWrapper>
                <input
                    name={"test"}
                    type="checkbox"
                    className="react-switch-checkbox"
                    id={props.id}
                    onChange={(e)=>props.handleCheckfunction(e)}
                    value={props.code}

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