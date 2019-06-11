import React from 'react';

import Article from './Article';
import { Row, List } from 'antd';

const ItemList = (props) => {
    return (
        <Row>
            <List>
                { 
                props.articles.map(article => <Article key={article.id} article={article} 
                removeArticle={props.removeArticle} editArticle={props.editArticle}  />)
                } 
            </List>
        </Row>

    );
};

export default ItemList; 