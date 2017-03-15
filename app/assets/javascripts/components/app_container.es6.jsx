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

  handleChange () {
    var tags = this.refs.tags.getCheckedValues();
    this.context.router.transitionTo('/', {}, {tags: tags});
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
    var images,
        tagIds = this.context.router.getCurrentQuery().tags;

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
          <CheckboxGroup
            ref="tags"
            name="tags"
            value={tagIds}
            onChange={this.handleChange.bind(this)}
          >
            {this.state.tags.map(function (tag) {
              return (
                <div key={tag.id}>
                  <input type="checkbox" value={tag.id} />
                  {tag.name}
                </div>
              );
            }.bind(this))}
          </CheckboxGroup>
        </div>
        <div className="col col-10 picrow bg-green">
          { images }
        </div>
      </div>
    );
  }
}

AppContainer.contextTypes = {
  router: React.PropTypes.func
};
