class CreateSuitcases < ActiveRecord::Migration
  def change
    create_table :suitcases do |t|

      t.timestamps null: false
    end
  end
end
