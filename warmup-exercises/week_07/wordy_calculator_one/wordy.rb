class Calculator
  def ask(question)
    matches = question.match(/What is (-?\d+) plus (-?\d+)?/)
    matches[1].to_i + matches[2].to_i
  end
end