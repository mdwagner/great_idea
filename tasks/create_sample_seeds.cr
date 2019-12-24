require "../spec/support/boxes/**"

# Add sample data helpful for development, e.g. (fake users, blog posts, etc.)
#
# Use `Db::CreateRequiredSeeds` if you need to create data *required* for your
# app to work.
class Db::CreateSampleSeeds < LuckyCli::Task
  summary "Add sample database records helpful for development"

  def call
    # Using a Avram::Box:
    #
    # Use the defaults, but override just the email
    # UserBox.create &.email("me@example.com")

    # Create base user
    user = UserBox.create do |box|
      box.email "mdwranger@gmail.com"
      box.encrypted_password Authentic.generate_encrypted_password("Asdf123!")
      box.firstname "Michael"
      box.lastname "Wagner"
    end

    # Create 5 ideas for base user
    (1..5).each do
      IdeaBox.create do |box|
        box.user_id user.id
      end
    end

    # Clean up orphan users from Boxes
    UserQuery.new.email.not.eq(user.email).delete

    # Using a SaveOperation:
    #
    # SaveUser.create!(email: "me@example.com", name: "Jane")
    #
    # You likely want to be able to run this file more than once. To do that,
    # only create the record if it doesn't exist yet:
    #
    # unless UserQuery.new.email("me@example.com").first?
    #  SaveUser.create!(email: "me@example.com", name: "Jane")
    # end
    puts "Done adding sample data"
  end
end
