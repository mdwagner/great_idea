class IdeasSerializer < BaseSerializer
  def initialize(@ideas : Array(Idea))
  end

  def render
    {
      ideas: IdeasSerializer.for_collection(ideas),
    }
  end
end
