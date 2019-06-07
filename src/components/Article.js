import React from 'react';
import '../style.css';

class Article extends React.Component {
    render() {
        const {article} = this.props;
        return (
            <div>
                <div key={article.id}>
                    <button className="btn btn-danger btn-xs suppr" onClick={() => this.props.removeArticle(article.id)}>supprimer</button>
                    {article.quantity} {article.name}
                </div>
            </div>
        )
    }
}

export default Article;