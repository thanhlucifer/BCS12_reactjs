import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const ShowDetail = () => {
    const params = useParams();
    const patName = useLocation();
    console.log(params, patName);
    return (
        <div>
            <Link className={
                patName.pathname === '/showdetail/Squirtle' ? 'text-green-500' : 'text-black'
            }> Demo</Link>
        </div>
    )
}

export default ShowDetail