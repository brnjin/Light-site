import React from 'react';
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';

class Cards extends React.Component {
	render() {
		return(
			<div>
				<Grid>
				  <Row>
				    <Col xs={6} md={3}>
				      <Thumbnail href="#" alt="171x180" src="https://via.placeholder.com/400x300" />
				    </Col>
				    <Col xs={6} md={3}>
				      <Thumbnail href="#" alt="171x180" src="https://via.placeholder.com/400x300" />
				    </Col>
				    <Col xs={6} md={3}>
				      <Thumbnail href="#" alt="171x180" src="https://via.placeholder.com/400x300" />
				    </Col>
				    <Col xs={6} md={3}>
				      <Thumbnail href="#" alt="171x180" src="https://via.placeholder.com/400x300" />
				    </Col>
				  </Row>
				</Grid>;
			</div> 
		)
	}
}

export default Cards