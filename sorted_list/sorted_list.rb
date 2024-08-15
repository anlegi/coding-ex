def min(list)
  sorted_list = list.sort
  return sorted_list[0]
end

def max(list)
  sorted_list = list.sort.reverse
  return sorted_list[0]
end
