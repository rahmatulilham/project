import React, { Component } from 'react';
import {
	FlatList,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	StatusBar,
	Image,
} from 'react-native';
import { style } from '../../assets/style';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchData: '',
			dataMovie: [],
		};
	}

	ambilData = () => {
		fetch('http://www.omdbapi.com/?apikey=30580c3c&s=' + this.state.searchData)
			.then(response => response.json())
			.then(json =>
				this.setState({ dataMovie: json.Search }),
			)
			.then(() => console.log(this.state.dataMovie))
			.catch(err => console.log(err));
	};

	render() {
		return (
			<View style={style.container}>
				<StatusBar barStyle="light-content" backgroundColor="#3B185F" />
				<View style={style.header}>
					<Text style={style.textHeader}>IMDB Movie</Text>
				</View>
				<View style={style.content}>
					<View style={style.input}>
						<TextInput
							style={style.TextInput}
							placeholder="Search Movie"
							onChangeText={value => this.setState({ searchData: value })}
						/>
						<TouchableOpacity
							style={style.buttonSearch}
							onPress={() => this.ambilData()}>
							<Text style={style.textButton}>Cari</Text>
						</TouchableOpacity>
					</View>
					<View style={style.FlatList}>
						<FlatList
							data={this.state.dataMovie}
							keyExtractor={item => item.imdbID}
							renderItem={({ item, Search }) => (
								<TouchableOpacity
									style={{
										flex: 1,
										flexDirection: 'row',
										justifyContent: 'flex-start',
										alignItems: 'flex-start',
										marginVertical: 5,
										borderBottomWidth: 1,
										borderBottomColor: '#000',
									}}
									onPress={() =>
										this.props.navigation.navigation('Detail', {
											idmovie: item.imdbID,
										})
									}>
									<View>
										<Image
											source={{ uri: item.Poster }}
											style={{
												width: 100,
												height: 150,
											}}
										/>
									</View>
									<View
										style={{
											flex: 1,
											flexWrap: 'nowrap',
											paddingHorizontal: 10,
										}}>
										<Text
											style={{
												fontSize: 22,
												fontWeight: 'bold',
												textAlign: 'left',
												marginBottom: 20,
											}}>
											{item.Title}
										</Text>
										<Text>Tahun : {item.Year}</Text>
										<Text>Tipe : {item.Type}</Text>
									</View>
								</TouchableOpacity>
							)}
						/>
					</View>
				</View>
			</View>
		);
	}
}

export default Home;
