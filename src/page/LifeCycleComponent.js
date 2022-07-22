import React, { Component, useEffect, useState } from "react";
import { View,Text } from "react-native";

export default class LifeCycleComponent extends Component{
    constructor(props){
        super(props);
        // console.log('constructor');
        this.state = {
            subscriber: 200
        } 
    }

    componentDidMount(){
        // console.log('componentDidMount');
        // setTimeout(() => {
        //     this.setState({
        //         subscriber: 500
        //     })
        // }, 4000);
    }

    componentDidUpdate(){
        // console.log('componentDidUpdate');        
    }

    componentWillUnmount(){
        // console.log('componentWillUnmount');
    }

    render() {
        // console.log('render');
        // console.log('hellow');
        return (
            <View>
                <MyName/>
            </View>
        )
    } 
}

const MyName = () => {
    const [isShow, SetIsShow] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            SetIsShow(false);
        }, 6000);
    })
    return (
        <View>
            {isShow && <Text>Hellow World</Text>}
            <LifeCycleFunctional />
        </View>
    )
}

const LifeCycleFunctional = () => {
    const [subscriber,setSubscriber] = useState(200);
    useEffect(() => {
        console.log('componentDidMount');
    })

    useEffect(() => {
        console.log('componentDidUpdate');
        setTimeout(() => {
            setSubscriber(500);
        }, 2000);
    },[subscriber])
    return (
        <View>
            <Text>Yaha {subscriber}</Text>
        </View>
    )
}