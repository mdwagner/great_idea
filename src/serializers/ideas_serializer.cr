class IdeasSerializer < BaseSerializer
  def initialize(@ideas : [] of Idea)
  end

  def render
    {
      ideas: IdeasSerializer.for_collection(ideas),
    }
  end
end
