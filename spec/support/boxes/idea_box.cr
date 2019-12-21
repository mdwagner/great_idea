class IdeaBox < Avram::Box
  def initialize
    title sequence("My Title")
    description sequence("My description")
    background_color Idea.settings.background_color
    user_id UserBox.create.id
  end
end
