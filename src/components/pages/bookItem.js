import React from 'react';
import {Col, Row, Well, Button} from 'react-bootstrap';

class BookItem extends React.Component{
    render(){
        return (
            <Well>
                <Row>
                    <Col xs={12}>
                        <h6>{this.props.title}</h6>
                        <p>{this.props.description}</p>
                        <h6>usd. {this.props.price}</h6>
                        <Button csStyle='primary'>Buy Now</Button>
                    </Col>
                </Row>
            </Well>
        )
    }
}

export default BookItem;