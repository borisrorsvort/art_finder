class Tag extends React.Component {
  render () {
    var tags = this.props.tag.id
    return (
      <Link to='/' query={{'tags[]': tags}} className='btn block'>
        {this.props.tag.name}
      </Link>
    );
  }
}

Tag.defaultProps = {
  tag: {
    name: 'Reset'
  }
};
