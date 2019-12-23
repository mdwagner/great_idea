class Api::Auth::Me < ApiAction
  get "/api/auth/me" do
    json UserSerializer.new(current_user)
  end
end
