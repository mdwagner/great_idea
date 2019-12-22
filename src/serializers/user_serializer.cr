class UserSerializer < BaseSerializer
  def initialize(@user : User)
  end

  def render
    {
      "id"         => @user.id,
      "email"      => @user.email,
      "firstname"  => @user.firstname,
      "middlename" => @user.middlename,
      "lastname"   => @user.lastname,
      "created_at" => @user.created_at,
      "updated_at" => @user.updated_at,
    }
  end
end
