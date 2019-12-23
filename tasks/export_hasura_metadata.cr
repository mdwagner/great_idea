require "http/client"

class ExportHasuraMetadata < LuckyCli::Task
  name "hasura.export"
  summary "Export (download) Hasura metadata"

  def call
    args = {
      url: "http://localhost:8081/v1/query",
      headers: HTTP::Headers{
        "Content-Type" => "application/json",
        "X-Hasura-Role" => "admin",
      },
      body: {
        "type" => "export_metadata",
        "args" => {} of String => String?,
      }.to_json,
    }

    HTTP::Client.post(**args) do |response|
      if response.status_code == 200
        File.write("hasura_metadata.json", response.body_io)
        puts "Successfully exported metadata"
      else
        puts "Failed to export metadata"
      end
    end
  end
end
