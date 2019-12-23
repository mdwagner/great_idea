class IdeaQuery < Idea::BaseQuery
  def where_user_id(id)
    user_id(id)
  end
end
