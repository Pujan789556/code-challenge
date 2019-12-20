import React, { Component } from 'react';
import './Search.css';

import {
    Form,
    FormControl,
    Button,
    InputGroup,
    Dropdown,
    DropdownButton
}
from 'react-bootstrap';

import { connect } from 'react-redux';
import { searchMovies,changeParam } from '../../redux/actions/actions';

const types = [{ id: '', text: 'All' }, { id: 'movie', text: 'Movie' }, { id: 'series', text: 'Series' }, { id: 'episode', text: 'Episode' }]

class SearchFilter extends Component {
	

  	handleChange = (e) => {
 		 this.props.changeParam(e.target.name,e.target.value);
  	}

  	handleDropdownItemClick = (e) => {
  		this.props.changeParam(e.target.name,{id: e.target.id,text: e.target.title });
  	}

  	handleSubmission = (e) => {
    	e.preventDefault();
    	this.props.searchMovies(this.props);

	}

  	render(){
	    return (
	        <Form inline className="mt-4" onSubmit={ this.handleSubmission }>
	        	<InputGroup className="mb-3">	
		    		<DropdownButton
		    			as={InputGroup.Prepend}
		    			variant="outline-dark"
		    			title={this.props.type.text}>
		    				{types.map(
		    					(type,index) => (
		    						<Dropdown.Item default='' key={index} name='type' id={type.id} title={type.text} onClick={this.handleDropdownItemClick} >{type.text}</Dropdown.Item>
		    					)
		    				)}
		    		</DropdownButton>
	    			<FormControl name="search" onChange={this.handleChange} />
	    			<Button type="submit" variant="outline-dark" className="ml-2">Search</Button>
	  			</InputGroup>
		  	</Form>

	    )
	}
}

const mapStateToProps = state => {
    return {
        advanceSearch: state.advanceSearch,
	      type: state.type,
	      search: state.search,
	      page: state.page
    }
}

const mapDispatchToProps = {
  searchMovies: searchMovies,
  changeParam: changeParam
};

export default connect(mapStateToProps, mapDispatchToProps) (SearchFilter);