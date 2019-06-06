import React from 'react';

import Form from './Form';
import Itemlist from './ItemList';

class App extends React.Component {
    render() {
        return (
            <div>
                <h3>Liste de commissions</h3>
                <div>
                    < Form formTitle="Ajouter des articles à acheter"/>
                    < Itemlist />
                </div>
            </div>
        );
    }
}

export default App; 