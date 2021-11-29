require 'pry'

# Your code goes here


class Computer
  attr_reader :brand :model
  
def initialize(brand, model)
  @brand = brand
  @model = model
end

binding.pry
0