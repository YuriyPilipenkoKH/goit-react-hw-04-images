import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Button from 'components/Button/Button'
import { iconCatSearch, } from 'utils/svgIcons'
import { SearchForm } from './Searchbar.styled'
import { Header } from './Searchbar.styled'


export class Searchbar extends Component {
    state = {
        query: '',
    }

    handleChange = (e) => {
     this.setState({query: e.target.value.trim()})
    }

    handleSubmit =(e) => {
      e.preventDefault()

      this.props.onSubmit( this.state.query)
      this.setState({query: ''})
    }


  render() {
    return (
        <Header className="searchbar">
        <SearchForm 
        onSubmit={ this.handleSubmit }
        className="form">
          <Button type="submit" className="search-btn">
            <span className="button-label"></span>{ iconCatSearch }
          </Button>
      
          <input
            name = 'search'
            onChange={this.handleChange}
            value = {this.state.query}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          
        </SearchForm>
      </Header>
    )
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
