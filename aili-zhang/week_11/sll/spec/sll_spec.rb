
require_relative '../sll.rb'


describe 'initialize()' do
	before do
		@linked_list = SinglyLinkedList.new("Zeppo")
	end

	it 'should return the length of 1 when creating a new linked list with a given head node' do
		expect(@linked_list.length).to eq(1)
	end
end


describe 'last()' do 
	before do
		@linked_list = SinglyLinkedList.new("Zeppo")
	end

	it 'checks if the last node is correctly returned' do
		@linked_list.append("Groucho")
		@linked_list.append("Harpo").append("Chico")
		expect(@linked_list.last().value).to eq("Chico")
	end

	it 'should return the node itself if it is the only node in the list' do
		expect(@linked_list.last().value).to eq("Zeppo")
	end
end

describe 'append(value)' do
	before do
		@linked_list = SinglyLinkedList.new("Zeppo")
	end

	it 'should add the node to the end of the list' do
		@linked_list.append("Groucho")
		@linked_list.append("Harpo").append("Chico")
		expect(@linked_list.last().value).to eq("Chico")
	end
end

describe 'prepend(value)' do
	before do
		@linked_list = SinglyLinkedList.new("Zeppo")
	end

	it 'should add the node to the front of the list' do
		@linked_list.prepend("Groucho")
		@linked_list.prepend("Harpo")
		expect(@linked_list.last().value).to eq("Zeppo")
	end
end

describe 'length()' do
	before do
		@linked_list = SinglyLinkedList.new("Zeppo")
	end

	it 'should return the length of 1 initially' do
		expect(@linked_list.length).to eq(1)
	end

	it 'should increment the length once the node has been added to the list using append()' do
		@linked_list.append("Groucho")
		expect(@linked_list.length).to eq(2)
	end
end


describe 'find(needle)' do
	before do
		@linked_list = SinglyLinkedList.new("Zeppo")
	end

	it 'should find and return the needle node' do
		@linked_list.append("Groucho")
		@linked_list.append("Harpo").append("Chico")
		expect(@linked_list.find("Chico")).to eq(@linked_list.last())
	end
end


describe 'reverse()' do
	before do
		@linked_list = SinglyLinkedList.new("Zeppo")
	end

	it 'should return the head node when calling last() after reversing the list' do
		@linked_list.append("Groucho")
		@linked_list.append("Harpo").append("Chico")
		expect(@linked_list.reverse().last.value).to eq("Zeppo")
	end
end	


describe 'reverse!()' do
	before do
		@linked_list = SinglyLinkedList.new("Zeppo")
	end

	it 'should return false when comparing the original list with the reversed list' do
		@linked_list.append("Groucho")
		@linked_list.append("Harpo").append("Chico")
		expect(@linked_list.reverse!()).to_not eq(@linked_list)
	end
end


describe 'each()' do
	before do
		@linked_list = SinglyLinkedList.new("Zeppo")
	end

	it 'should print out all the values one by one' do
		@linked_list.append("Groucho")
		@linked_list.append("Harpo").append("Chico")

		result = []

		@linked_list.each do |node|
			result << node
		end
		expect(result).to eq(["Zeppo", "Groucho", "Harpo", "Chico"])
	end
end



