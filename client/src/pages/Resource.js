import React from "react";
import { useParams } from 'react-router-dom';
import ResourceAddEdit from '../components/ResourceAddEdit';

function Resource(){

    const { id } = useParams();

    return(
        <>
            <div>
                <h2>{id ? "Edit Article" : "New Article"}</h2>
                <ResourceAddEdit />
            </div>
        </>
    );
}

export default Resource;