import { json } from 'express';
import React, { Component } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

class Detailmovie extends Component{
    constructor(props) {
        super(props);
        this.state = {
            detailMovie: [],
            loading: false
        };
    }
    ambilDetailData = () => {
        this.setState({loading: true})
        fetch('http://www.omdbapi.com/?apikey=30580c3c&i=' + this.props.route.params.idmovie)
            .then((response)=> response.json())
            .then((json) => this.setState({ detailMovie: json}, () => console.log(json)))
            .catch((err) => console.log(err))
            .finally(() => this.setState({ loading: false}))
    }
    componentDidMount = () => {
        this.ambilDetailData();
    };

    render(){
        return (
          <View>
            {this.state.loading == true ? (
              <ActivityIndicator size="large" color="red" />
            ) : (
              <View>
                <Text>Title : {this.state.detailMovie.Title}</Text>
                <Text>Year : {this.state.detailMovie.Year}</Text>
                <Text>Release : {this.state.detailMovie.Released}</Text>
              </View>
            )}
          </View>
        );
    }
}

export default Detailmovie;