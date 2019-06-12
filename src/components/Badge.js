import React from 'react';

import { Badge } from 'antd';

class Badges extends React.Component {
    state = {
      count: 5,
      show: true,
    };
  
    increase = () => {
      const count = this.state.count + 1;
      this.setState({ count });
    };
  
    decline = () => {
      let count = this.state.count - 1;
      if (count < 0) {
        count = 0;
      }
      this.setState({ count });
    };
  
    onChange = show => {
      this.setState({ show });
    };
  
    render() {
        return (
          <div>
            <div>
              <Badge count={this.state.count}>
            
              </Badge>
            </div>
    
          </div>
        );
      }
    }

    export default Badges;