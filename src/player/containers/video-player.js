import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';

 class VideoPlayer extends Component {
  state = {
    pause: true,
  }
  togglePlay = (event) => {
    this.setState({
      // pause sera lo contario a lo definido
      pause: !this.state.pause
    })
  }
  // componente montado validar play/pause
  componentDidMount() {
    this.setState({
      // si se cumple es true sino es false
      pause: (!this.props.autoplay)
    })
  }
  render() {
    return (
      <VideoPlayerLayout>
        <Title
          titulo="Esto es un video chido!"
        />
        <PlayPause
        // mostrar dependiendo del estado play/pause
          pause={this.state.pause}
          // handleClick de play-pause (props.handleclick)
          //togglePlay sera una funcion
          handleClick={this.togglePlay}
        />
        <Video
          autoplay={this.props.autoplay}
          // this.state.pause pasando estado de play/pause
          pause={this.state.pause}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}
 export default VideoPlayer;