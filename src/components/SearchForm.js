import React, {Component} from 'react';
import {BsSearch} from 'react-icons/bs';

class SearchForm extends Component{
    state = {
        searchText: ''
    }

     onSearchChange = e => {
        this.setState(
            {
                searchText: e.target.value
            }
        )
    }
    
   handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.query.value);
        e.currentTarget.reset();
    }
   render(){
        return (
            <form class="search-form" onSubmit={this.handleSubmit}>
                <input
                type="search"
                onChange={this.onSearchChange}
                ref={(input) => this.query = input}
                name="search"
                placeholder="Search" required
                />
                <button type="submit" class="search-button"><BsSearch/></button>
            </form>
        )
    }

}

export default SearchForm;