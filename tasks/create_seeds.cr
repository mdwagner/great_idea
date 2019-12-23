class CreateSeeds < LuckyCli::Task
  name "db.create_seeds"
  summary "Create both required and sample seeds"

  def call
    Db::CreateRequiredSeeds.call
    Db::CreateSampleSeeds.call
  end
end
