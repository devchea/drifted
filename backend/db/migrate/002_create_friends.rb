class CreateFriends < ActiveRecord::Migration[5.2]
    def change
      create_table :friends do |t|
        t.string :name
        t.string :phone
        t.string :email
        t.integer :recurrence_integer
        t.string :recurrence_unit
        t.timestamps
      end
    end
  end