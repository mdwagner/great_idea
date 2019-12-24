require "../spec_helper"

describe Idea do
  it "has 1 idea tied to a user" do
    idea = IdeaBox.create do |box|
      box.user_id UserBox.create.id
    end

    user = (
      UserQuery.new
        .preload_ideas
        .find(idea.user_id)
    )

    user.ideas.first?.should eq idea
  end
end
