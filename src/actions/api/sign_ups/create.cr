class Api::SignUps::Create < ApiAction
  include Api::Auth::SkipRequireAuthToken

  route do
    user = SignUpUser.create!(params)
    json TokenSerializer.new(user)
  end
end
