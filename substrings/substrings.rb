dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

def substrings(string, dictionary)
  hash = {}

  dictionary.each do |word|
    if string.include?(word)
      hash[word] ||= 0 # if nil or false, it assigns 0
      hash[word] += 1
    end
  end

  p hash
end

substrings("horndown", dictionary)
