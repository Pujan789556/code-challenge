import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroller';
import './ListMovies.css';
import { connect } from 'react-redux';
import Search from '../Search'

import { nextPageSearchMovies } from '../../redux/actions/actions';




class ListMovies extends Component {

  loadNextPage = () => {
     let nextPage = this.props.page + 1;
     this.props.nextPageSearchMovies(this.props,nextPage);
    }

    render() {
        return (
          <div>
    <Row className="justify-content-md-center">
      <Search />
    </Row>
    <Row hidden={!this.props.error} className="justify-content-md-center">
      <p  className="error-text">{this.props.error}</p>
    </Row>
    <Row hidden={!this.props.movies.length > 0}>
    <InfiniteScroll
        className="infinitescroll"
        pageStart={this.props.page}
        loadMore={this.loadNextPage}
        hasMore={this.props.totalResults > this.props.page * 10}
        useWindow={true}
        threshold={1}
    >
      {this.props.movies.sort((prev,next) => next.Year - prev.Year).map(
        (movie,index) =>(
        <div key={index} className="container-fluid mt-2 mb-1">
        <div className="card flex-row flex-wrap">
        <div className="card-header border-0">
            <Link to={`/${movie.imdbID}`}><img className="card-img-thumb" src={movie.Poster} alt={movie.Title}/></Link>
        </div>
        <div className="card-block pt-2 pl-2">
            <h4 className="card-title"><Link to={`/${movie.imdbID}`}>{movie.Title}</Link></h4>
            <p className="card-text capitalize">{movie.Type} | {movie.Year}</p>
        </div>
    </div>
    </div>
          ) 
        )}
      </InfiniteScroll>
      </Row>
    </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        response: state.response,
        error: state.error,
        totalResults: state.totalResults,
        page: state.page,
        type: state.type,
        search: state.search,
    };
};

const mapDispatchToProps = {
  nextPageSearchMovies: nextPageSearchMovies,
};

export default connect(mapStateToProps,mapDispatchToProps)(ListMovies);