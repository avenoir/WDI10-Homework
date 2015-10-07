Author.destroy_all
Author.create(:name => 'Stephen King', :nationality => 'American', :dob => '1947/09/21', :genre => 'Crime Fiction', :image => 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Stephen_King%2C_Comicon.jpg')

Book.destroy_all
Book.create(:title => 'Mr. Mercedes', :year => '2014', :genre => 'Crime Fiction', :image => 'https://upload.wikimedia.org/wikipedia/en/0/0d/Mrmercedes.jpg')