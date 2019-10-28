import React, {Component} from 'react';

class FilmItem extends Component{

    render(){
        return(
            <div className='filmItem'>
                <ul>
                    <li>
                        <h3><a href="{this.props.url}"></a>{this.props.children}</h3>
                    </li>
                </ul>
                
              
            </div>
        )
    }
}

export default FilmItem;