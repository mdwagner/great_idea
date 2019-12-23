require "../../../../../spec_helper"

describe Api::V1::Users::Ideas::Index do
  it "returns a list of ideas" do
    idea = IdeaBox.create
    user = UserQuery.new.find(idea.user_id)

    response = AppClient
      .auth(user)
      .exec(Api::V1::Users::Ideas::Index.with(user.id))

    expected_json = IdeasSerializer.new([idea]).render
    response.should send_json(200, **expected_json)
  end
end
