import React, {Component} from 'react';
//import {robots} from './robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import Head from '../components/Head';
import Kitten from '../components/Kitten';
import Monster from '../components/Monster';

//redux:import actions:
import {setSearchField,requestRobots} from '../actions';
import {connect} from 'react-redux';

const mapStateToProps = state =>{
	return{
		//Nokte: aval faqat searchField bod
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps =(dispatch)=>{
	return{
		onSearchChange: (event)=>dispatch(setSearchField(event.target.value)),
		onRequestRobots : ()=>dispatch(requestRobots)
		//ya be sorate zir:
		//onRequestRobots: ()=>requestRobots(dispatch)
	}
}


class App extends Component{
	// constructor(){
	// 	super()
	// 	this.state={
	// 		robots:[],
	// 		//searchField:''
		// }
	// }

	componentDidMount(){
		this.props.onRequestRobots();
		// fetch('https://jsonplaceholder.typicode.com/users')
		// .then(response=>{return response.json()})
		// .then(users=>{this.setState({robots:users})});
		
	}

	// onSearchChange =(event)=>{
	// 	this.setState({searchfield:event.target.value})
	// }
	render(){
		//const {robots,searchfield}=this.state;
		// const {robots}=this.state;

		//redux:
		const {searchField,onSearchChange,robots,isPending}=this.props;

		const filteredRobots = robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
	
	//return !robots.length ? 
	return isPending ?
		<h1>Loading</h1>:
		(
		<div className='tc'>
			<h1 className='f1'>Robots Animation</h1>
			<SearchBox searchChange={onSearchChange}/>
			<Scroll>
			<CardList robots={filteredRobots}/>
			</Scroll>
			<h2 id='head'>How Robo Animation Works</h2>

			<p id='body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat neque mi, non venenatis turpis interdum eget. Proin nisl orci, accumsan eget commodo sit amet, egestas vel dolor. Sed vel augue eu urna convallis posuere nec vel elit. Mauris vehicula viverra ornare. Fusce congue tortor vitae nibh efficitur convallis. Fusce iaculis pretium leo, sed dapibus orci malesuada ac. Curabitur interdum rutrum erat, ut sagittis lacus condimentum in. Nulla lobortis vulputate metus lacinia congue. Ut a felis molestie orci vestibulum varius ut eget nibh. Ut condimentum vestibulum justo. Duis id justo porta, laoreet mauris eget, venenatis justo. Nunc tempor mi eget metus sagittis venenatis. Fusce congue mauris eu enim venenatis pulvinar. Quisque vehicula, dolor vel posuere hendrerit, lorem urna porta dui, et bibendum risus lacus eget ligula. Nunc volutpat augue sit amet lectus rhoncus convallis.</p>
			<h2 id='head'>Options to Make Your Animation Super Cool</h2>
			<p id='body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat neque mi, non venenatis turpis interdum eget. Proin nisl orci, accumsan eget commodo sit amet, egestas vel dolor. Sed vel augue eu urna convallis posuere nec vel elit. Mauris vehicula viverra ornare. Fusce congue tortor vitae nibh efficitur convallis. Fusce iaculis pretium leo, sed dapibus orci malesuada ac. Curabitur interdum rutrum erat, ut sagittis lacus condimentum in. Nulla lobortis vulputate metus lacinia congue. Ut a felis molestie orci vestibulum varius ut eget nibh. Ut condimentum vestibulum justo.</p>
			<h2 id='head'>The Most Popular Robo Characters</h2>
			
				<h4 className='h'>Tom Smith</h4>
				<p className='w'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum<br/>
				Vestibulum consequat neque mi, non venenatis turpis interdumn<br/>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum<br/>
				Vestibulum consequat neque mi, non venenatis turpis interdumn<br/>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum<br/>
				Vestibulum consequat neque mi, non venenatis turpis interdumn.<br/>
				</p> 
				<img className='tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5' src='https://robohash.org/famous2?size=200x200'/>
				<h4 className='h'>John Cavawoo</h4>
				<p className='w'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum<br/>
				Vestibulum consequat neque mi, non venenatis turpis interdumn<br/>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum<br/>
				Vestibulum consequat neque mi, non venenatis turpis interdumn<br/>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum<br/>
				Vestibulum consequat neque mi, non venenatis turpis interdumn.<br/>
				</p> 
				<img className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' src='https://robohash.org/famous1?size=200x200'/>
				<h4 className='h'>Mr. Flappy brown</h4>
				<p className='w'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum<br/>
				Vestibulum consequat neque mi, non venenatis turpis interdumn<br/>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum<br/>
				Vestibulum consequat neque mi, non venenatis turpis interdumn<br/>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum<br/>
				Vestibulum consequat neque mi, non venenatis turpis interdumn.<br/>
				</p> 
				<img className='tc bg-washed-red dib br3 pa3 ma2 grow bw2 shadow-5' src='https://robohash.org/famo3?size=200x200'/>
				<h4 className='h'>Jack Uhoo</h4>
				<p className='w'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum<br/>
				Vestibulum consequat neque mi, non venenatis turpis interdumn<br/>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum<br/>
				Vestibulum consequat neque mi, non venenatis turpis interdumn<br/>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum<br/>
				Vestibulum consequat neque mi, non venenatis turpis interdumn.<br/>
				</p> 
				<img className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5' src='https://robohash.org/famo5?size=200x200'/>
				<h4 className='h'>Mrs. Emma Buruk</h4>
				<p className='w'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum<br/>
				Vestibulum consequat neque mi, non venenatis turpis interdumn<br/>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum<br/>
				Vestibulum consequat neque mi, non venenatis turpis interdumn<br/>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum<br/>
				Vestibulum consequat neque mi, non venenatis turpis interdumn.<br/>
				</p> 
				<img className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5' src='https://robohash.org/fus1?size=200x200'/>
			<br/>
			<br/>
			<div>
				<h2 id='head'>Change the Head of Your Robot</h2>
				<Head/>
			</div>
			
			<div>
				<h2 id='head'>Who Do You Want to Battle With</h2>
				<Monster/>
			</div>
			
			<div>
				<h2 id='head'>Choose Your Robo Kitten</h2>
				<Kitten/>
			</div>
			
			<div>
				<h2 id='head'>Enjoy Your First Robo Animation</h2>
				<p id='body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat neque mi, non venenatis turpis interdum eget. Proin nisl orci, accumsan eget commodo sit amet, egestas vel dolor. Sed vel augue eu urna convallis posuere nec vel elit. Mauris vehicula viverra ornare. Fusce congue tortor vitae nibh efficitur convallis. Fusce iaculis pretium leo, sed dapibus orci malesuada ac. Curabitur interdum rutrum erat, ut sagittis lacus condimentum in. Nulla lobortis vulputate metus lacinia congue. Ut a felis molestie orci vestibulum varius ut eget nibh. Ut condimentum vestibulum justo.</p>
			</div>
			
			<h2 id='head'>Contact Us</h2>
			<p className='mail'>test@gmail.com</p>
		</div>
			);
	
	}
	
}
//aval:
//export default App;
//redux:
export default connect(mapStateToProps,mapDispatchToProps)(App);