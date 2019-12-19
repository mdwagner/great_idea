class DumpStructureSql < LuckyCli::Task
  name "db.structure.dump"
  summary "Dumps current database schema to db/structure.sql"

  def call
    Avram::Migrator::Runner.dump_db
  end
end
