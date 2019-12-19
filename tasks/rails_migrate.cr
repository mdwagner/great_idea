class RailsMigrate < LuckyCli::Task
  name "db.rails_migrate"
  summary "Like db:migrate from Rails"

  def call
    Db::Migrate.new.call
    DumpStructureSql.new.call
  end
end
