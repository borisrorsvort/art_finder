class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :author
      t.string :file
      t.string :url

      t.timestamps null: false
    end
  end
end
