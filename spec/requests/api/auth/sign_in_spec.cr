require "../../../spec_helper"

describe Api::Auth::SignIn do
  it "returns a token" do
    UserToken.stub_token("fake-token") do
      user = UserBox.create

      response = AppClient.exec(Api::Auth::SignIn, user: valid_params(user))

      response.should send_json(200, token: "fake-token")
    end
  end

  it "returns an error if credentials are invalid" do
    user = UserBox.create
    invalid_params = valid_params(user).merge(password: "incorrect")

    response = AppClient.exec(Api::Auth::SignIn, user: invalid_params)

    response.should send_json(
      400,
      param: "password",
      details: "password is wrong"
    )
  end
end

private def valid_params(user : User)
  {
    email:    user.email,
    password: "password",
  }
end
