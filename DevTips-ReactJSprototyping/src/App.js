import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
    color: '#ebadad'
}

let fakeServerData = {
  user: {
      name: 'Marta',
      movieList: [
        {
            title: 'tytuł filmu 1',
            relaseDate: 2002,
            numVotes: 234,
            rating: 4
          },
        {
            title: 'tytuł filmu 2',
            relaseDate: 2012,
            numVotes: 134,
            rating: 2
        },
        {
            title: 'tytuł filmu 3',
            relaseDate: 1986,
            numVotes: 89,
            rating: 4
        }
    ]
  }
}

class MoviesCounter extends Component {
    render() {
        return(
            <div style={{display: 'inline-block', width: '40%'}}>
                <h2>{this.props.movieList.length} movies in database</h2>
            </div>
        );
    }
}

class VotesCounter extends Component {
    render() {
        let sumVotes = this.props.movieList.reduce((sum, eachMovie) => {
            return sum + eachMovie.numVotes
        } , 0) 
        return(
            <div style={{display: 'inline-block', width: '40%'}}>
                <h2>{sumVotes} votes!</h2>
            </div>
        );
    }
}

class Filter extends Component {
    render() {
        return(
            <div>
                <img/>
                <input type='text' onKeyUp={ e => this.props.onTextChange(e.target.value)}/>
            </div>
        );
    }
}

class MovieList extends Component {
    render() {
        let movieList = this.props.movieList
        return(
            <div style={{...defaultStyle, width: '25%', display: 'inline-block'}}>
                <img/>
                <h3>{movieList.title}</h3>
                <ul>
                    <li>{movieList.relaseDate}</li>
                    <li>{movieList.numVotes}</li>
                    <li>{movieList.rating}</li>
                </ul>
            </div>
        );
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            serverData: {},
            filterString: ''
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({serverData: fakeServerData});
        }, 1000); 
    }
    
  render() {
      
      let movieListToRender = this.state.serverData.user ? this.state.serverData.user.movieList
        .filter(movieList => 
            movieList.title.toLowerCase().includes(
                this.state.filterString.toLowerCase())
        ) : []
      
    return (
      <div className="App">
        {
        this.state.serverData.user ?
        
        <div>
            <h1 style={defaultStyle}>
            {this.state.serverData.user.name}, find movie to watch tonight</h1>

            <MoviesCounter movieList ={movieListToRender} />
            <VotesCounter movieList ={movieListToRender}/>

            <Filter onTextChange={text => {
                this.setState({filterString: text})
            }}/>
        
            { movieListToRender.map(movieList => <MovieList movieList={movieList}/>)}
            
        </div> 
        
        : <h1 style={{...defaultStyle}}>Loading...</h1>
        }
        
        
      </div>
    );
  }
}

export default App;