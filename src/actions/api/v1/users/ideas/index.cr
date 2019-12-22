class Api::V1::Users::Ideas::Index < ApiAction
  nested_route do
    ideas = UserQuery.ideas(user_id)
    json IdeaSerializer.for_collection(ideas)
  end
end
