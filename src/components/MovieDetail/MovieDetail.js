import React, { Component } from 'react';
import axios from '../../axios/axios'
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import { Container } from 'react-bootstrap';
import './MovieDetail.css';
import { connect } from 'react-redux';


class MovieDetail extends Component {
     constructor(props) {
    super(props);

    this.state = {
      imdbID: this.props.match.params.imdbID,
      movie: {}
    }
}
 
  
  componentDidMount() {
    const url='&i='+this.state.imdbID+'&plot=full';
        axios.get(url)
            .then(response =>{
                const movie = response.data;
                this.setState({ movie });
            })
            .catch(error => {
                console.log(error);
            })
  }


    render() {
        return (
            <Container fluid className="pt-2">
            <Row>
            <Col sm={2}>
            <Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src={this.state.movie.Poster}
  />
  <Figure.Caption>
   {this.state.movie.Released} ({this.state.movie.Country}) | {this.state.movie.Genre} | {this.state.movie.Runtime} | {this.state.movie.Language}
  </Figure.Caption>
</Figure>
</Col>
<Col sm={10}>
<Card border="secondary">
<Card.Header>
    <Row>
    <Col sm={6}>
    <Card.Title>{this.state.movie.Title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{this.state.movie.Year}</Card.Subtitle>
    </Col>
    <Col sm={6}>
    <div className="ratings_wrapper float-right">
            <div className="imdbRating" >
                    <div className="ratingValue">
                    <strong><span>{this.state.movie.imdbRating}</span></strong><span className="grey">/</span><span className="grey">10</span>
                    </div>
                    <span className="small" >{this.state.movie.imdbVotes}</span>
            </div>
</div>
</Col>
</Row>
    </Card.Header>
  <Card.Body>
    <Card.Text>
      {this.state.movie.Plot}
    </Card.Text>
    <div>
  <span className="label">Director: </span>
  <span className="value">{this.state.movie.Director}</span>
  </div>
  <div>
  <span className="label">Writers: </span>
  <span className="value">{this.state.movie.Writer}</span>
  </div>
   <div>
  <span className="label">Stars: </span>
  <span className="value">{this.state.movie.Actors}</span>
  </div>
  </Card.Body>
</Card>

</Col>
</Row>
            </Container>

        );
    }

}

const mapStateToProps = state => {
    return {
       
    };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps,mapDispatchToProps)(MovieDetail);