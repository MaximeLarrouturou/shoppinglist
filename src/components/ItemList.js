import React from 'react';

import Article from './Article';

const ItemList = (props) => {
    return (
        <div>
            <div>Achats prévus</div>
            {
                props.articles.map(article => <Article data={article} key={article.id} />)
            } 
        </div>
    );
};

export default ItemList; 