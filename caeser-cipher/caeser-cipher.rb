def caeser_cipher(string, shift)
  downcase_string = string.downcase
  array = downcase_string.split("")
  shift_number = shift.to_i
  alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  new_array = []

  array.each do |chr|
    if !alphabet.include?(chr)
      new_array.push(chr)
      next
    end
    original_index = alphabet.index(chr)
    new_index = original_index + shift_number
    if new_index > 25
      new_index = new_index - 26
    end
    new_letter = alphabet[new_index]
    new_array.push(new_letter)
  end

  return new_array.join("")
end

p caeser_cipher("What a string!", 4)
