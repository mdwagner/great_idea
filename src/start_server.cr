require "./app"

if Lucky::Env.development?
  Avram::Migrator::Runner.new.ensure_migrated!
  Avram::SchemaEnforcer.ensure_correct_column_mappings!
end
Habitat.raise_if_missing_settings!

app_server = AppServer.new
puts String.build do |str|
  str << "Listening on http://"
  str << app_server.host
  str << ":"
  str << app_server.port
end

Signal::INT.trap do
  app_server.close
end

app_server.listen
