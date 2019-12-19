class DumpStructureSql < LuckyCli::Task
  name "db.structure.dump"
  summary "Dumps current database schema to db/structure.sql"

  def call
    ARGV << "db/structure.sql"
    Db::Schema::Dump.new.call
  end
end
