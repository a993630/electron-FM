import React, { Component } from 'react'
import axios from 'axios'
import { inject, observer } from 'mobx-react'

@inject('homeStore')
@observer
export default class HomePage extends Component {

    componentDidMount () {
        console.log(this.props.homeStore.getAll())
        // axios.get('http://i.qingting.fm/capi/neo-recommend/attrs').then((data) => {console.log(data)})
    }

    render () {
        return (
            <div>hello world</div>
        )
    }
}