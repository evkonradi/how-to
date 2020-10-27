import React from "react";
import { useParams } from 'react-router-dom';

function ArticleView(){

    const { id } = useParams();

    return(
        <div>
            <h2>View Article</h2>
            <span>{id}</span>
        </div>
    );

}

export default ArticleView;