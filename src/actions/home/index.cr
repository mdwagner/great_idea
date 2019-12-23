class Home::Index < ApiAction
  include Api::Auth::SkipRequireAuthToken

  get "/" do
    json({ hello: "Hello world from Home::Index" })
  end
end
