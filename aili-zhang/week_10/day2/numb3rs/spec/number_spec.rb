
require_relative '../number'

describe Number do
	describe '.bin2dec' do
		it 'converts binary to decimal' do
			expect(Number.bin2dec('1101')).to eq 13
			expect(Number.bin2dec('0000')).to eq 0
			expect(Number.bin2dec('1010')).to eq 10
			expect(Number.bin2dec('1111')).to eq 15
		end	
	end

	describe '.dec2bin' do
		it 'converts decimal to binary' do
			expect(Number.dec2bin(13)).to eq '1101'
			expect(Number.dec2bin(0)).to eq '0000'
			expect(Number.dec2bin(10)).to eq '1010'
			expect(Number.dec2bin(15)).to eq '1111'
		end
	end

	describe '.bin2hex' do
		it 'converts binary to hex' do
			expect(Number.bin2hex('1110111110011')).to eq '1df3'
			expect(Number.bin2hex('111110100')).to eq '1f4'
			expect(Number.bin2hex('10001100001')).to eq '461'
			expect(Number.bin2hex('10001010111000')).to eq '22b8'
			expect(Number.bin2hex('0000')).to eq "0"
		end
	end

	describe '.hex2bin' do
		it 'converts hex to binary' do
			expect(Number.hex2bin('1df3')).to eq '1110111110011'
			expect(Number.hex2bin('1b58')).to eq '1101101011000'
			expect(Number.hex2bin('2694')).to eq '10011010010100'
			expect(Number.hex2bin('1ae6')).to eq '1101011100110'
		end
	end
end




