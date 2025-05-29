import { Link } from 'react-router-dom';
import  './CategorySidebar.css';
import {useDispatch,useSelector} from "react-redux";
import { useEffect } from 'react';
import { fetchAllCtegories } from '../../redux/apiCalls/categoryApiCall';
const CategorySideBar = () => {
     const dispatch = useDispatch();
    const {categories} = useSelector(state=>state.category);
    useEffect(()=>{
    dispatch(fetchAllCtegories());
    },[]);
   
    
    return ( 
        <div className="cat-sidebar">
            <h5 className='cat-sidebar-title'>Categories</h5>
            <ul className="cat-sidebar-links">
                {categories.map(category=>
                    <Link className='cat-sidebar-link' key={categories._id}
                     to={`/courses/categories/${category.title}`}>
                    {category.title}
                    </Link>
                )}
            </ul>
        </div>
     );
}
 
export default CategorySideBar;