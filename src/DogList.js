import React from 'react';
import {Link} from "react-router-dom"

class DogList extends React.Component {

    render() {
        let imgStyle = {
            height: "250px",
            borderRadius: "50%"
        }
        let dogs = this.props.dogData.map(dog =>
            <Link to={`/dogs/${dog.name}`}> <div style={{
                display: "inline-block",
                margin: "5px"
            }}>
                <p> {dog.name}</p>
                <img style={imgStyle} src={dog.src}
                    alt='dog' />
            </div> </Link>);
        return (
            <div>
                {dogs}
            </div>
        )
    }
}
export default DogList;