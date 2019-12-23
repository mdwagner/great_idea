class Api::SignIns::Create < ApiAction
  include Api::Auth::SkipRequireAuthToken

  route do
    SignInUser.new(params).submit do |operation, user|
      if user
        json TokenSerializer.new(user)
      else
        raise Avram::InvalidOperationError.new(operation)
      end
    end
  end
end
