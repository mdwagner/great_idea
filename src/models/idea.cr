class Idea < BaseModel
  Habitat.create do
    # white
    setting background_color : Int32 = "ffffff".to_i(16)
  end

  table do
    column title : String?
    column description : String?
    column background_color : Int32

    belongs_to user : User
  end
end
