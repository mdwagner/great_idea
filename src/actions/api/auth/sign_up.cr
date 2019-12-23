class Api::Auth::SignUp < ApiAction
  include Api::Auth::SkipRequireAuthToken

  post "/api/auth/sign_up" do
    user = SignUpUser.create!(params)
    json TokenSerializer.new(user)
  end
end
