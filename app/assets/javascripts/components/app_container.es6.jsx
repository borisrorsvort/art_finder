class AppContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      images: [],
      tags: JSON.parse(this.props.tags),
      currentTags: []
    }
  }

  componentWillReceiveProps () {
    this.fetchImages(this.context.router.getCurrentQuery());
  }

  componentWillMount () {
    this.fetchImages(this.context.router.getCurrentQuery());
  }

  addFilter (tag) {
    if (tag.props.tag.id) {
      this.setState({
        currentTags: [tag.props.tag.id]
      }, this.fetchImages);
    } else {
      this.setState({
        currentTags: []
      }, this.fetchImages);
    }
  }

  fetchImages (query) {
    $.ajax({
      url: '/images.json',
      dataType: 'json',
      data: query
    })
    .done((images) => {
      this.setState({images: images});
    });
  }

  render () {
    var images;

    if (this.state.images.length) {
      images = (
        <ImagesView images={this.state.images} />
      );
    } else {
      images = (
        <div className='p4 center'>Nothing found</div>
      );
    };

    return (
      <div className="content">
        <div className="col col-2 bg-gray p2">
          <Tag onAddFilter={this.addFilter.bind(this)} />
          {this.state.tags.map(function (tag) {
            return (
              <Tag tag={tag} onAddFilter={this.addFilter.bind(this)} key={tag.id} />
            )
          }.bind(this))}
        </div>
        <div className="col col-10">
          { images }
        </div>
      </div>
    );
  }
}

AppContainer.contextTypes = {
  router: React.PropTypes.func
};

// AppContainer.willTransitionTo = function (transition, params, query, callback) {
//   debugger;
// };
