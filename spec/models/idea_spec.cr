require "../spec_helper"

describe Idea do
  it "has 1 idea tied to a user" do
    idea = IdeaBox.create

    user = (
      UserQuery.new
        .preload_ideas
        .find(idea.user_id)
    )

    user.ideas.first?.should eq idea
  end
end
