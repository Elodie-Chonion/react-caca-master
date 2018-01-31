import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            seriesList: [],
            seriesEpisodesList: []
        };
    }

    componentDidMount() {

        fetch('seriesList.json',{})
            .then(response => response.json())
            .then(seriesList => {
                this.setState({seriesList: seriesList});

            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {

            });

        fetch('seriesEpisodesList.json',{})
            .then(response => response.json())
            .then(seriesList => {
                this.setState({seriesEpisodesList: seriesList});

            })
            .catch(function (error) {
                console.log(error);
            });

    }



    render() {
        console.log(this.state.seriesList.id);
        console.log(this.state.seriesList[0]);
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />

                <ul>
                    {this.state.value !== "" ?

                        this.state.seriesList.filter(
                            premiere => premiere.seriesName.trim().indexOf(this.state.value) > -1).map(item => <li key={item.id}>{item.seriesName}

                            <ul>
                                {   this.state.seriesEpisodesList.filter(
                                    deuxieme => deuxieme.serie_id == item.id).map(episode => episode.episodes_list.filter(troisieme => troisieme.episodeName).map(name => <li>{name.episodeName}</li>))
                                }
                            </ul>
                        </li>)
                    }

                </ul>

            </div>
        )
    }
}


export default App;
