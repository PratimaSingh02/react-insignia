
import React, { Component } from 'react'

export default class Banner extends Component {
    // constructor(props){
    //     super(props)
    //     console.log(this.props.children)
    // }
    render() {
        return (
            <div className='banner' style={{overflow:this.props.overflow,height:this.props.height}}>
                {this.props.children}
            </div>
        )
    }
}

