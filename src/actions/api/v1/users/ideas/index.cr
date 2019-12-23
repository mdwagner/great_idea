class Api::V1::Users::Ideas::Index < ApiAction
  nested_route do
    ideas = IdeaQuery.new.where_user_id(user_id)
    json IdeasSerializer.new(ideas)
  end
end
