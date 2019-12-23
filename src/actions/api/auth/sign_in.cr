class Api::Auth::SignIn < ApiAction
  include Api::Auth::SkipRequireAuthToken

  post "/api/auth/sign_in" do
    SignInUser.new(params).submit do |operation, user|
      if user
        json TokenSerializer.new(user)
      else
        raise Avram::InvalidOperationError.new(operation)
      end
    end
  end
end
