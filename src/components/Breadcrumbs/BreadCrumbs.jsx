import { Link, useLocation } from "react-router-dom"


// eslint-disable-next-line react/prop-types
export default function BreadCrumbs({ props }) {

    const pathname = useLocation();

    console.log(pathname.pathname);

    return (
        <div  {...props}>
            <span>Products {">"} </span>
            <Link to='/ProductsCategories'>Categories</Link>
        </div>
    )
}
