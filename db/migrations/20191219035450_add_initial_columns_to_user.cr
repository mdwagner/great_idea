class AddInitialColumnsToUser::V20191219035450 < Avram::Migrator::Migration::V1
  def migrate
    alter table_for(User) do
      add firstname : String?
      add middlename : String?
      add lastname : String?
    end
  end

  def rollback
    alter table_for(User) do
      remove :firstname
      remove :middlename
      remove :lastname
    end
  end
end
