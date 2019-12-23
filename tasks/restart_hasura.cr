class RestartHasura < LuckyCli::Task
  name "hasura.docker_restart"
  summary "Restart Hasura docker service"

  def call
    `docker-compose restart graphql-engine`
    if $?.success?
      puts "Successfully restarted docker hasura"
    else
      puts "Failed to restart docker hasura"
    end
  end
end
