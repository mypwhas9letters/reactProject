import React, { Component} from 'react';

class ListOfPhotos extends Component {
  state = {
    photos: []
  }

  componentDidMount = async(e) => {
    const url = ""
    const listOfPhotos = await fetch(url)
    var json = await listOfPhotos.json()
    this.setState({photos: json.photos.photo})
    console.log(this.state)
  }

  render(){
    const images = this.state.photos.map(image => <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}/>)
    return(
      <div>
        <div class="ui small images">
          { images }
        </div>
      </div>
    )
  }
}

export default ListOfPhotos
