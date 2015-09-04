Author.destroy_all

Author.create(:name => 'Isaac Asimov', :nationality => "Russian", :dob => "1920-01-02", :image => "https://upload.wikimedia.org/wikipedia/commons/3/34/Isaac.Asimov01.jpg")


Book.destroy_all

Book.create(:name => 'A Christmas Carol', :genre => 'novel', :published => "1843-12-19", :image => "https://upload.wikimedia.org/wikipedia/commons/4/4f/Charles_Dickens-A_Christmas_Carol-Cloth-First_Edition_1843.jpg")