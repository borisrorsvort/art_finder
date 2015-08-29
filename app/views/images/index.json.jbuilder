json.array!(@images) do |image|
  json.extract! image, :id, :author, :file, :url
  json.url image_url(image)
  json.tag_list image.tag_list.join(', ')
end
