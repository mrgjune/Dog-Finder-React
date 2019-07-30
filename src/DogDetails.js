import React from 'react';
import {Link} from "react-router-dom"

class DogDetails extends React.Component {

    render() {
        let dogName = this.props.match.params.name
        let dogInfo;
        let dogData = this.props.dogData

        for (let i = 0; i < dogData.length; i++) {
            if (dogData[i].name === dogName) {
                dogInfo = dogData[i]
            }
        }

        let imgStyle = {
            height: "300px",
            borderRadius: "50%"
        }
       

        return (
            
            <body style= {{height:"100vw", width:"100vw", background:"dodgerblue"}}> 
            <div  style={{textAlign:"center"}} >
               <p> {dogInfo.name}</p>
               <img style={imgStyle} src={dogInfo.src}
                    alt='dog' />
                {dogInfo.facts.map( info => 
                  <li>{info} </li>
                )}
                  
            </div>
           </body>
       
        )
    }
}
export default DogDetails;