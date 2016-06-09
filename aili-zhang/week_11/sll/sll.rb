
class SinglyLinkedList
	attr_accessor :head

	def initialize(first_value=nil)
		@head = Node.new(first_value) if first_value
	end

	def last
		current_node = @head
		while current_node.next
			current_node = current_node.next
		end
		current_node
	end

	def append(value)
		node = Node.new(value)
		self.last.next = node

		self # return the object itself to allow chaining like in jQuery
	end

	def prepend(value)
		node = Node.new(value)
		node.next = @head
		@head = node
	end

	def length # look up how to alias methods in Ruby for count() and size()
		count = 0

		current_node = @head

		while current_node
			count += 1
			current_node = current_node.next
		end
		count
	end

	def find(needle) # needle is the value we are looking for
		# Returns the node containing needle as its value.
		current_node = @head

		while current_node.next
			if current_node.value != needle
				current_node = current_node.next
			else
				current_node.value = needle
			end
		end
		current_node
	end

	def reverse
		# Returns a new SLL with the nodes in reverse order
		copy_list = SinglyLinkedList.new

		current_node = @head
		while current_node
			copy_list.prepend(current_node.value)
			current_node = current_node.next
		end
		copy_list
	end

	def reverse!
		# Reverses the nodes in place (actually update the list)
		current_node = @head
		prev_node = nil

		until current_node.nil?
			next_node = current_node.next
			current_node.next = prev_node
			prev_node = current_node
			current_node = next_node
		end

		@head = prev_node
	end

	def each
		current_node = @head

		while current_node
			yield(current_node.value) # When a method expects a block, it invokes it by calling the yield function.
			current_node = current_node.next
		end
	end

	class Node
		attr_accessor :value, :next

		def initialize(value=nil) # default value is nil
			@value = value
			@next = nil
		end
	end
end




