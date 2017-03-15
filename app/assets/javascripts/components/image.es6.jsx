class Image extends React.Component {
  render () {
    return (
      <img src={this.props.src} {...this.props}/>
    );
  }
}
