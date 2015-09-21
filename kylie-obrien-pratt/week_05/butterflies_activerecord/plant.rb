# GET /plants index (two URLs needed: /plants and /plants/ID)
# POST /plants create
# GET /plants/id = show
# GET /plants/new new
# /update edit

class Plant < ActiveRecord::Base
  has_many :butterflies
end






