class Idea < BaseModel
  table do
    column title : String?
    column description : String?
    column background_color : Int32

    belongs_to user : User
  end
end
