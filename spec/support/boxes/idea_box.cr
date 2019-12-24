class IdeaBox < Avram::Box
  def initialize
    title sequence("My Title")
    description sequence("My description")
    background_color Idea.settings.background_color
  end
end
