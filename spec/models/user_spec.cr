require "../spec_helper"

describe User do
  it "has 2 users" do
    UserBox.create_pair

    UserQuery.new.select_count.should eq 2
  end
end
