class IdeasSerializer < BaseSerializer
  def initialize(@ideas : Array(Idea))
  end

  def render
    {
      ideas: IdeaSerializer.for_collection(@ideas),
    }
  end
end
