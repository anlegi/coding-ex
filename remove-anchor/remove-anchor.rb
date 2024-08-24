def remove_url_anchor(url)
  arr = url.split("")
  new_arr = []
  arr.each do |element|
    if element == "#"
      new_arr = arr.slice(0, arr.index(element))
      return new_arr.join("")
    end
  end
  arr.join("")
end
