import React from "react";
import { useParams } from 'react-router-dom';
import ResourceAddEdit from '../pages/ResourceAddEdit';

function Resource(){

    const { id } = useParams();

    return(
        <>
            <div>
                <h1>this is a test</h1>
                <h2>{id ? "Edit Article" : "New Article"}</h2>
                <ResourceAddEdit />
            </div>
        </>
    );
}

export default Resource;