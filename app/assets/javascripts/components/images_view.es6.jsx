class ImagesView extends React.Component {
  getImages () {
    console.log(this.props.images);
    var params = {
      align: 'center',
      containerWidth: 1128,
      spacing: 5
    }
    var layout = Layout(this.props.images, params);

    var images = this.props.images.map(function (image, index) {
      return (
        <Image href={image.url}
               key={index}
               tag_list={image.tag_list}
               src={image.file.file.large.url}
               width={layout.positions[index].width}
               height={layout.positions[index].height}
        />
      );
    });

    return images;
  }

  render () {
    return (
      <div>
        {this.getImages()}
      </div>
    );
  }
}

//
// <div>
//   {this.props.images.map(function (image) {
//     return (
//       <Image href={image.url} key={image.id} tag_list={image.tag_list} src={image.file.file.large.url} />
//     );
//   })}
// </div>
