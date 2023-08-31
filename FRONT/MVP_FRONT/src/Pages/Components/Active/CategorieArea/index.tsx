import * as React from 'react';
import CategoriesUL from '../CategoriesUL';
import axios from 'axios';
import baseURL from '../../../../../baseURL';

type Categorie = {
    _id: string;
    name: string;
    code: string;
};

export const CategorieArea = () => {
    const [categories, setCategories] = React.useState<Categorie[]>([]);

    const fetchData = async () => {
        try {
            const response = await axios.get<Categorie[]>(`${baseURL}/categories`);
            setCategories(response.data);
        } catch (error) {
            console.log("Error fetching data", error);
        }
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    if (!categories.length) {
        return (
            <>
                <h6>Sorry, nothing to select here 😥</h6>
            </>
        );
    }

    return (
        <>
            <ul>
                <div>
                    <h3>Categories</h3>
                </div>

                <br />
                {categories.map((categorie: Categorie) => (
                    <CategoriesUL
                        key={categorie._id}
                        id={`i${categorie._id}`}
                        name={categorie.name}
                    />
                ))}
            </ul>
        </>
    );
};