import React from 'react';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './index.css';
import Clarifai from 'clarifai'

const app = new Clarifai.App({
  apiKey: 'e5fafaee27ae42f0afb67ea927153d3b'
 });

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }



calculateFaceLocation = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('inputimage');
  const width = Number(image.width);
  const height = Number(image.height);
  return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - (clarifaiFace.right_col * width),
    bottomRow: height - (clarifaiFace.bottom_row * height)
  }
} 


displayFaceBox = (box) => {
  console.log(box);
  this.setState({box: box});
}

onInputChange = (event) => {
  this.setState({ input: event.target.value });
}

onButtonSubmit = () => {
  this.setState({imageUrl: this.state.input})
  app.models
  .predict(Clarifai.FACE_DETECT_MODEL,
   this.state.input)
   .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
}

  render() {
    const { isSignedIn, route, box, imageUrl } = this.state;
  return (
    <div className="App">
      <ImageLinkForm 
        onInputChange={this.onInputChange}
        onSubmit={this.onButtonSubmit}/>
      <FaceRecognition box={box} imageUrl={imageUrl} />
      </div>
      )
  }
}

export default App;
