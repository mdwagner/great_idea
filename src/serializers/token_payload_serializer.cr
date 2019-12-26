class TokenPayloadSerializer < BaseSerializer
  def initialize(@user : User)
  end

  def render
    {
      sub:                            sub,
      name:                           full_name,
      iat:                            iat,
      exp:                            exp,
      "https://hasura.io/jwt/claims": {
        "x-hasura-allowed-roles": allowed_roles,
        "x-hasura-default-role":  default_role,
        "x-hasura-user-id":       sub,
      },
    }
  end

  private def sub
    @user.id.to_s
  end

  private def full_name
    String.build do |str|
      str << @user.firstname
      str << " "
      str << @user.lastname
    end
  end

  private def iat
    Time.utc.to_unix
  end

  private def exp
    (Time.utc + 1.day).to_unix
  end

  private def allowed_roles
    if @user.email == "mdwranger@gmail.com"
      {"admin", "user"}
    else
      {"user"}
    end
  end

  private def default_role
    if @user.email == "mdwranger@gmail.com"
      "admin"
    else
      "user"
    end
  end
end
