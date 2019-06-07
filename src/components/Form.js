import React from 'react';
//import '../style.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }));
  

class Form extends React.Component {
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
                <form  onSubmit={this.handleSubmit}>
                <TextField type="number" 
                            className="quantity"  
                            placeholder="quantité"
                            margin="normal"
                            variant="outlined" 
                            value={this.state.quantity}
                            onChange={(event) => this.setState({ quantity: event.target.value })}                            
                    />
                    <TextField type="text" 
                            placeholder="article"                     
                            value={this.state.name} 
                            margin="normal"
                            variant="outlined"
                            onChange={(event) => this.setState({ name: event.target.value })}
                            />
                    <Button type="submit" variant="contained" color="primary">ajouter</Button> {/*<button type="submit" className="btn btn-success">ajouter</button>*/}
                </form>
            </div> 
        );
    }
};

export default Form; 