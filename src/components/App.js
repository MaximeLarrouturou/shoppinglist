import React from 'react';
import {connect} from 'react-redux';

import Form from './Form';
import Itemlist from './ItemList';
import { Row, Col, Divider } from 'antd';

class App extends React.Component {
    
    render() {
        return (
<Row>
    <Col span={12} offset={6}>
            <h1>Liste de courses</h1>
                < Form formTitle="Ajouter des articles à acheter"addArticle={this.props.addArticle}/>
                <Divider>Achats Prévus</Divider>
                < Itemlist articles={this.props.articles} 
                            removeArticle={this.props.removeArticle} 
                            editArticle={this.props.editArticle} 
                />
    </Col>
</Row>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        articles: state.articles
    };
  };
  
  
  const addArticleActionCreator = (article) => {
      return {
          type: 'ADD_ARTICLE',
          payload: article
      }
  }

  const removeArticleActionCreator = (articleId) => {
    return {
        type: 'REMOVE_ARTICLE',
        payload: articleId
    }
}

  const editArticleActionCreator = (article) => {
    return {
        type: 'EDIT_ARTICLE',
        payload: article
    }
}

  
  const mapDispatchToProps = (dispatch) => {
      return {
          addArticle: (article) => {
            dispatch(addArticleActionCreator(article));        
        },
         removeArticle: (articleId) => {
            dispatch(removeArticleActionCreator(articleId));
        },
         editArticle: (article) => {
            dispatch(editArticleActionCreator(article)); 
        }
      };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);