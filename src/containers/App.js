import React from 'react';
import { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from "../components/Scroll";
import ErroBoundry from '../components/ErrorBoundry';
import './App.css'

class App extends Component {
  
    constructor(){ 
        console.log('constructor');        
        super();
        this.state = {
            robots: [],
            searchfield: '',            
        };               
    };

    componentDidMount(){
        console.log('componentDidMount');
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(users => this.setState({robots:users}));
    }
    
    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value,                   
        });        
    };

    render(){
        console.log('render');
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.title.toLowerCase().includes(searchfield.toLowerCase());
        })
        const count = filteredRobots.length;
        if ( !robots.length ){
            return <h1>Loading</h1>
        }
        else{
            return (
                <div className='tc'>
                    <h1 className='f1'>Robofriends great</h1>
                    <h3>{count} Robos</h3>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErroBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErroBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;
