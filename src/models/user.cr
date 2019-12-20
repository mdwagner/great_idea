class User < BaseModel
  include Carbon::Emailable
  include Authentic::PasswordAuthenticatable

  table do
    column email : String
    column encrypted_password : String
    column firstname : String?
    column middlename : String?
    column lastname : String?

    has_many ideas : Idea
  end

  def emailable : Carbon::Address
    Carbon::Address.new(email)
  end
end
