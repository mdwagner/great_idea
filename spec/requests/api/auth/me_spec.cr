require "../../../spec_helper"

describe Api::Auth::Me do
  it "returns the signed in user" do
    user = UserBox.create

    response = AppClient.auth(user).exec(Api::Auth::Me)

    response.should send_json(200, email: user.email)
  end

  it "fails if not authenticated" do
    response = AppClient.exec(Api::Auth::Me)

    response.status_code.should eq(401)
  end
end
