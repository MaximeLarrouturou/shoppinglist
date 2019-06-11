import React from 'react';

import { Button, Row, Input } from 'antd';

class Article extends React.Component {
    state = { isInEditMode: false }

    handleRemove = (articleId) => {
        if( ('Voulez-vous vous supprimer ?')) {
            this.props.removeArticle(articleId);
        }
    }

    editArticle = (article) => {
        this.setState({ isInEditMode: !this.state.isInEditMode });
    }

    handleQuantityEdit = (event, article) => {
        event.preventDefault();
        article.quantity = event.target.value;
        this.props.editArticle(article);
    }

    handleNameEdit = (event, article) => {
        event.preventDefault();
        article.name = event.target.value;
        this.props.editArticle(article)
    }

    render() {
        const {article} = this.props;
        return (
            <Row>
                <div className="example-input" key={article.id}>
                    <Button type="primary" className="edit" onClick={() => this.editArticle(article)}>modifier</Button>
                    <Button type="danger" className="suppr" onClick={() => this.handleRemove(article.id)}>supprimer</Button>
                    {
                        this.state.isInEditMode ?
                            <span>
                                <Input type="number" value={article.quantity} 
                                        onChange={(event) => this.handleQuantityEdit(event, article)} />
                                <Input type="text" value={article.name} 
                                        onChange={(event) => this.handleNameEdit(event, article)} />
                            </span>
                        : <span>{article.quantity} {article.name}</span>
                    }
                </div>
            </Row>
        )
    }
}

export default Article;