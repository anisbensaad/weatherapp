import React, { Component } from 'react';
import {Sparklines,SparklinesLine}  from 'react-sparklines';


class Chart extends Component {

	constructor(props){
		super(props);
	}


	render() {
    	return (	

    	
    		      
                            <Sparklines height={120} width={180} data={this.props.data}>
                                <SparklinesLine color={this.props.color} />
                            </Sparklines>
                  
    	);
    }

}


export default Chart;