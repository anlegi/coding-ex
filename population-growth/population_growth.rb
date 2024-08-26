def nb_year(p0, percent, aug, p)
  years = 0
  population = p0

  while population <= p do
    population += (population * (percent / 100.0)) + aug
    years += 1
  end
  return years
end
