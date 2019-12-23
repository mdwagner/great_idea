class IdeaSerializer < BaseSerializer
  def initialize(@idea : Idea)
  end

  def render
    {
      id: @idea.id,
      title: @idea.title,
      description: @idea.description,
      background_color: @idea.background_color.to_s(16),
      created_at: @idea.created_at,
      updated_at: @idea.updated_at,
      user_id: @idea.user_id,
    }
  end
end
