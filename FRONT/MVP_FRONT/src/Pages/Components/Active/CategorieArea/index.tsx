import * as React from 'react'
import CategoriesUL from '../CategoriesUL'
import axios from 'axios'
import baseURL from '../../../../../baseURL'


type Categorie = {
    _id: string;
    name: string;
    code: string
}

export const CategorieArea = ()=>{


    const [categorie, setCategorie] = React.useState<Categorie[]>([]);

    React.useEffect ( ()=>{
        axios.get<Categorie[]>(`${baseURL}/categories`).then((response)=>{
            setCategorie(response);
        })
        .catch(error=>{
            console.log("Error fetching data", error);
        });
    }, [])

    if(!categorie.data) return (
        <>
            <h6>Sorry, nothing to select here 😥</h6>
        </>
    );

    return (
        <>
            
          <ul>
            <div>
                <h3>Categories</h3> 
            </div>  
          
          <br />
            {categorie.data.map((categorie: Categorie)=>{
                        return(                               
                            <CategoriesUL
                                key = {categorie._id} 
                                id = {`i${categorie._id}`}
                                name = {categorie.name}
                            />                    
                           );   
                         })
            } 
            </ul>    
        </>      
    ); 
    
};