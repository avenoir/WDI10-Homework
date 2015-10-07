
Author.destroy_all

Author.create(:name => 'Isaac Asimov', :nationality => "Russian", :dob => "1920-01-02", :image => "https://upload.wikimedia.org/wikipedia/commons/3/34/Isaac.Asimov01.jpg")



Book.destroy_all
Book.create(:title => 'Hello Kitty', :date_of_publish => '2000-02-10', :genre => 'comedy', :cover => 'http://www.newyorker.com/wp-content/uploads/2014/08/Stokes-Hello-Kitty2-1200.jpg')

