import React from  "react";
import { Card, Row, Col } from "antd";
const gridStyle = {
    width: '10%',
    textAlign: 'center',
  };
  const listOfProducts = [
      { 
          id : '1', 
          name: 'mobile',
          catagory : 'mobile'
      },
      { 
        id : '2', 
        name: 'mobile',
        catagory : 'mobile'
    },
    { 
        id : '3', 
        name: 'mobile',
        catagory : 'mobile'
    },
    { 
        id : '4', 
        name: 'mobile',
        catagory : 'mobile'
    },
    { 
        id : '5', 
        name: 'mobile',
        catagory : 'mobile'
    }
  ]
class Dashboard extends React.Component {
    render() {
        return(
            <div>
              {/* Catagories  */}
              <Card title="Select A catagory">
                <Card.Grid style={gridStyle}> <h5><i className="fa fa-home"></i> <br />Property for Sale </h5> </Card.Grid>
                <Card.Grid style={gridStyle}><h5><i className="fa fa-home"></i> <br />Property for Rent </h5> </Card.Grid>
                <Card.Grid style={gridStyle}><h5><i class="fas fa-motorcycle"></i> <br />Bikes </h5> </Card.Grid>
                <Card.Grid style={gridStyle}><h5><i class="fas fa-mobile-alt"></i> <br />Mobiles </h5></Card.Grid>
                <Card.Grid style={gridStyle}><h5><i class="fas fa-tv"></i> <br />Electronics </h5></Card.Grid>
                <Card.Grid style={gridStyle}><h5><i class="fas fa-shopping-bag"></i> <br />Jobs </h5></Card.Grid>
                <Card.Grid style={gridStyle}><h5><i class="fas fa-motorcycle"></i> <br />Bikes </h5></Card.Grid>
              </Card>
            
              <div style={{ background: '#ECECEC', padding: '25px' }}>

             {   listOfProducts.map( item => (
                   
                    <Col span={8}>
                        <Card  title="Card title" hoverable>{item.name}</Card>
                    </Col>
                   
             ))
             }
             </div>
            </div>
        );
    };
};

export default Dashboard;