import React,{Component} from 'react';

const Scroll =(props)=>{
	return(
		<div style={{overflowY:'scroll', border:'3px solid #090F44', height:'800px'}}>
		{props.children}
		</div>
	);
	
}
export default Scroll;