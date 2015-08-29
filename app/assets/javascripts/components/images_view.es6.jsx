class ImagesView extends React.Component {
  render () {
    return (
      <div>
        {this.props.images.map(function (image) {
          return (
            <Image href={image.url} key={image.id} tag_list={image.tag_list} src={image.file.file.large.url} />
          );
        })}
      </div>
    );
  }
}
