require "http/client"

class ImportHasuraMetadata < LuckyCli::Task
  name "hasura.import"
  summary "Import Hasura metadata"

  def call
    metadata = File.open("hasura_metadata.json") do |file|
      JSON.parse(file)
    end

    args = {
      url: "http://localhost:8081/v1/query",
      headers: HTTP::Headers{
        "Content-Type" => "application/json",
        "X-Hasura-Role" => "admin",
        "X-Hasura-Admin-Secret" => Hasura::Env.admin_secret,
      },
      body: {
        "type" => "replace_metadata",
        "args" => metadata,
      }.to_json,
    }

    HTTP::Client.post(**args) do |response|
      if response.status_code == 200
        puts "Successfully imported metadata"
      else
        output = {
          status: response.status_code,
          message: "Failed to import metadata",
          details: response.body_io.gets
        }
        puts output.to_json
      end
    end
  end
end
