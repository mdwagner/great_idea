# This is the default error serializer generated by Lucky.
# Feel free to customize it in any way you like.
class ErrorSerializer < BaseSerializer
  # @param: so you can track which param (if any) caused the problem
  def initialize(
    @message : String,
    @details : String? = nil,
    @param : String? = nil
  )
  end

  def render
    {
      message: @message,
      param:   @param,
      details: @details,
    }
  end
end
