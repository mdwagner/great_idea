class UserQuery < User::BaseQuery
  def self.ideas(user_id)
    new.preload_ideas.find(user_id).ideas
  end
end
