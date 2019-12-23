class CreateSeeds < LuckyCli::Task
  name "db.create_seeds"
  summary "Create both required and sample seeds"

  def call
    Db::CreateRequiredSeeds.new.call
    Db::CreateSampleSeeds.new.call
  end
end
