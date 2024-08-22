def first_non_consecutive(arr)
  return nil if arr.length <= 1

  arr.each_cons(2) do |a, b|
    return b if b != a + 1
  end

  nil
end
