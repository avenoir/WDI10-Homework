require 'pry'
class Calculator
  attr_reader :question
  def initialize question
    @question = question
    ask
  end

  def ask
    matches = @question.match(  /(?<first-num>-?\d+)/  )
    binding.pry
    puts ( matches[1].to_i + matches[2].to_i )
    matches[1].to_i + matches[2].to_i
  end
end

calc = Calculator.new "What is -55 plus 5?"




















# class Calculator
#   def ask(question)
#     matches = question.match(/What is (-?\d+) plus (-?\d+)?/)
#     matches[1].to_i + matches[2].to_i
#   end
# end