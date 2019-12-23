class TokenSerializer < BaseSerializer
  def initialize(@user : User)
  end

  def render
    {
      token: UserToken.generate(@user),
    }
  end
end
