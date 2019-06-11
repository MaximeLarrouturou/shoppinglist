import React from 'react';
import { Form, Input, Button } from 'antd';

class Forms extends React.Component {
    state = {
        name: '',
        quantity: 0
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const article = { name: this.state.name, quantity: this.state.quantity };
        this.props.addArticle(article);
        this.setState({ name: '', quantity: 0});
    }

    render() {

        return (
            <div>
                <h3>{this.props.formTitle}</h3>
                <Form  onSubmit={this.handleSubmit}>
                <div className="example-input">
                  <Input      
                      type="number"           
                      className="quantity"  
                      placeholder="quantité"
                      value={this.state.quantity}
                      onChange={(event) => this.setState({ quantity: event.target.value })}                                   
                  />     
                  <Input 
                      type="text" 
                      placeholder="article"                     
                      value={this.state.name} 
                      onChange={(event) => this.setState({ name: event.target.value })}          
                  />
                  <Button type="primary" htmlType="submit">ajouter</Button> {/*<button type="submit" className="btn btn-success">ajouter</button>*/}
                </div>
                    
                </Form>
            </div> 
        );
    }
}

export default Forms; 
