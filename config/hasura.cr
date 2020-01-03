module Hasura::Env
  extend self

  def admin_secret : String
    ENV["ADMIN_SECRET"]? || "myadminsecretkey"
  end
end
