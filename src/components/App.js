import React from 'react';
import {connect} from 'react-redux';

import Form from './Form';
import Itemlist from './ItemList';
import { Row, Col, Divider, Skeleton, Switch, Card, Icon} from 'antd';


class App extends React.Component {
    state = {
        loading: true,
      };

      onChange = checked => {
        this.setState({ loading: !checked });
      };
    
    render() {
    
        const { loading } = this.state;

        return ( 

        <Row>
            <Col lg={{ span: 12, offset: 6 }}>
                <Switch checked={!loading} onChange={this.onChange}  style={{ marginTop: 16, marginLeft:16 }}/>
                    <Card style={{ marginTop: 16 }} >
                        <Skeleton loading={loading} active>
                            <h1>Liste de courses</h1>
                            < Form formTitle="Ajouter des articles à acheter"addArticle={this.props.addArticle}/>
                        </Skeleton>
                    </Card>

                    <Divider>Achats Prévus</Divider>

                    <Card
                    style={{ marginTop: 16 }}
                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                    >
                        <Skeleton loading={loading} active>                       
                            < Itemlist articles={this.props.articles} 
                            removeArticle={this.props.removeArticle} 
                            editArticle={this.props.editArticle} 
                            /> 
                        </Skeleton>
                    </Card>
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