class CreateIdeas::V20191220033436 < Avram::Migrator::Migration::V1
  def migrate
    create table_for(Idea) do
      primary_key id : Int64
      add title : String?
      add description : String?
      add background_color : Int32, default: 16777215 # white
      add_timestamps

      add_belongs_to user : User, on_delete: :cascade
    end
  end

  def rollback
    drop table_for(Idea)
  end
end
