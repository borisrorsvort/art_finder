class Image extends React.Component {
  render () {
    return (
      <a href={this.props.href} className='border p2 bg-black inline-block'>
        <img src={this.props.src}/>
        <div className="white">{this.props.tag_list}</div>
      </a>
    );
  }
}
