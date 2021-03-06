require "../../../spec_helper"

describe Api::Auth::SignUp do
  it "creates user on sign up" do
    UserToken.stub_token("fake-token") do
      response = AppClient.exec(Api::Auth::SignUp, user: valid_params)

      response.should send_json(200, token: "fake-token")
      new_user = UserQuery.first
      new_user.email.should eq(valid_params[:email])
    end
  end

  it "returns error for invalid params" do
    invalid_params = valid_params.merge(password_confirmation: "wrong")

    response = AppClient.exec(Api::Auth::SignUp, user: invalid_params)

    UserQuery.new.select_count.should eq(0)
    response.should send_json(
      400,
      param: "password_confirmation",
      details: "password_confirmation must match"
    )
  end
end

private def valid_params
  {
    email:                 "test@email.com",
    password:              "password",
    password_confirmation: "password",
  }
end
