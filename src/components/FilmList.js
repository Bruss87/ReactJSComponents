import React, {Component} from 'react';
import FilmItem from './FilmItem';

class FilmList extends Component{

    render(){
        
        const filmNodes = this.props.filmItems.map(filmItem =>{
            return(
                <FilmItem key={filmItem.id}>{filmItem.name}</FilmItem>
            )
        })

        return(
            <div className="film-list">
                {filmNodes}
            </div>
        )

    }
}

export default FilmList;