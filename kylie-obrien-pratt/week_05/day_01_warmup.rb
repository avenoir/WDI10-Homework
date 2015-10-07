# Letter Scores

# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10
# Examples

# "cabbage" should be scored as worth 14 points:

# 3 points for C
# 1 point for A, twice
# 3 points for B, twice
# 2 points for G
# 1 point for E
# And to total:

# 3 + 2*1 + 2*3 + 2 + 1
# = 3 + 2 + 6 + 3
# = 5 + 9
# = 14
require 'pry'

class Scrabble
	attr_accessor:word

def initialize(word)
	@word = word

#converts letters entered to uppercase
def score 
	letters = word.upcase.split('')

	# cumulative sum of letter scores
	sum = 0
    	letters.each do |letter|
      	sum += letter_scores[letter]
    end

    sum
end


def letter_scores
	{
		1 =>["A" =>1, "E" =>1, "I" =>1, "O" =>1, "U" =>1, "L" =>1, "N" =>1, "R" =>1, "S" =>1, "T" =>1, 
		"D" =>2, "G" =>2, "B" =>3, "C" =>3, "M" =>3, "P" =>3, "F" =>4, "H" =>4, "V" =>4, "W" =>4, "Y" =>4, "K" =>4,
		"J" =>8, "X" =>8,
		"Q" =>10, "Z" =>10]
	}
	end
end

	puts "Type in one word to determine letter score"
	word = gets.chomp
	puts "The Scrabble score for " + #{ @word } + " is " + #{ sum}
end

scrabble = Scrabble.new "cabbage"




