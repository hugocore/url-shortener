class CreateLinks < ActiveRecord::Migration[5.1]
  def change
    create_table :links do |t|
      t.string :code, null: false
      t.string :url, null: false
      t.integer :clicks, default: 0
      t.timestamps

      t.index :code
      t.index :url
    end
  end
end
