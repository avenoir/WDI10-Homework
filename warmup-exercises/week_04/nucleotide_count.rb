# Receive a string, and a single character
# Return how many times that character occurs
def count( nucleotide, strand )
  strand.upcase.count( nucleotide )
end

def nucleotide_counts( strand )
  {
    :A => count( "A", strand ),
    :C => count( "C", strand ),
    :G => count( "G", strand ),
    :T => count( "T", strand )
  }
end


# puts count( "A", "AATA" )
puts nucleotide_counts( "AAATCCCGGGGUUUUU" )