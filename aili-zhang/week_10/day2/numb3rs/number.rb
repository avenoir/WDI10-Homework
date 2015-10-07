
class Number

#   _         _                       __                 _                   
#  | |__     (_)    _ _       o O O   \ \      o O O  __| |    ___     __    
#  | '_ \    | |   | ' \     o         > >    o      / _` |   / -_)   / _|   
#  |_.__/   _|_|_  |_||_|   TS__[O]  _/_/_   TS__[O] \__,_|   \___|   \__|_  
# _|"""""|_|"""""|_|"""""| {======|_|"""""| {======|_|"""""|_|"""""|_|"""""| 
# "`-0-0-'"`-0-0-'"`-0-0-'./o--000'"`-0-0-'./o--000'"`-0-0-'"`-0-0-'"`-0-0-' 
	def self.bin2dec(bin)
		number = 0
		power = 0
		bin.chars.reverse.each do |bit|
			bit = bit.to_i
			number += (bit * 2 ** power)
			power += 1
		end
		number
	end



#      _                              __              _         _            
#   __| |    ___     __       o O O   \ \      o O O | |__     (_)    _ _    
#  / _` |   / -_)   / _|     o         > >    o      | '_ \    | |   | ' \   
#  \__,_|   \___|   \__|_   TS__[O]  _/_/_   TS__[O] |_.__/   _|_|_  |_||_|  
# _|"""""|_|"""""|_|"""""| {======|_|"""""| {======|_|"""""|_|"""""|_|"""""| 
# "`-0-0-'"`-0-0-'"`-0-0-'./o--000'"`-0-0-'./o--000'"`-0-0-'"`-0-0-'"`-0-0-' 
	def self.dec2bin(dec)
		bin_result = []

		if dec == 0
			bin_result << '0000'
		end

		while dec > 0
			remainder = dec % 2
			
			if remainder == 0
				bin_result << 0
			elsif remainder == 1
				bin_result << 1
			end

			dec = dec / 2
		end

		bin_result.reverse.join
	end



#   _         _                       __              _                      
#  | |__     (_)    _ _       o O O   \ \      o O O | |_      ___    __ __  
#  | '_ \    | |   | ' \     o         > >    o      | ' \    / -_)   \ \ /  
#  |_.__/   _|_|_  |_||_|   TS__[O]  _/_/_   TS__[O] |_||_|   \___|   /_\_\  
# _|"""""|_|"""""|_|"""""| {======|_|"""""| {======|_|"""""|_|"""""|_|"""""| 
# "`-0-0-'"`-0-0-'"`-0-0-'./o--000'"`-0-0-'./o--000'"`-0-0-'"`-0-0-'"`-0-0-' 
	def self.bin2hex(bin)
		
		# convert binary to decimal first by calling the function above
		dec = bin2dec(bin)

		hex_result = []

		if dec == 0
			hex_result << "0"
		end

		while dec > 0
			remainder = dec % 16
			hex_result << remainder
			dec = dec / 16
		end

		hex_result.each_with_index do |h, i|
			if h == 10
				hex_result[i] = "a"

			elsif h == 11
				hex_result[i] = "b"

			elsif h == 12
				hex_result[i] = "c"

			elsif h == 13
				hex_result[i] = "d"

			elsif h == 14
				hex_result[i] = "e"

			elsif h == 15
				hex_result[i] = "f"
			end
		end

		hex_result.reverse.join
	end



#   _                                 __              _         _            
#  | |_      ___    __ __     o O O   \ \      o O O | |__     (_)    _ _    
#  | ' \    / -_)   \ \ /    o         > >    o      | '_ \    | |   | ' \   
#  |_||_|   \___|   /_\_\   TS__[O]  _/_/_   TS__[O] |_.__/   _|_|_  |_||_|  
# _|"""""|_|"""""|_|"""""| {======|_|"""""| {======|_|"""""|_|"""""|_|"""""| 
# "`-0-0-'"`-0-0-'"`-0-0-'./o--000'"`-0-0-'./o--000'"`-0-0-'"`-0-0-'"`-0-0-' 
	def self.hex2bin (hex)

		bin_result = []

		hex.split("").each_with_index do |h, i|
			if h == "a"
				bin_result << 10
			elsif h == "b"
				bin_result << 11
			elsif h == "c"
				bin_result << 12
			elsif h == "d"
				bin_result << 13
			elsif h == "e"
				bin_result << 14
			elsif h == "f"
				bin_result << 15
			else
				bin_result << h.to_i
			end

			bin_result[i] = dec2bin(bin_result[i])

			# rewrite the binary with 0s in the front if the length is less than 4
			# e.g. instead of "11", we need "0011"
			# we only need to do the above process if it is not the first element in the array
			if bin_result[i].length < 4 && i != 0
				(4 - bin_result[i].length).times do
					bin_result[i] = "0" + bin_result[i]
				end
			end
		end

		bin_result.join()
	end
end


			#     ,                  ,     
			#    /_\       .-,      /_\    
			#   _( )_   ,-.|  \ _  _( )_   
			#  (_ o _)  \  '_ /  |(_ o _)  
			# / (_,_) \ _`,/ \ _// (_,_) \ 
			# )_/   \_((  '\_/ \ )_/   \_( 
			#           `"/  \  )          
			#             \_/``"                  



