class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.integer :user_id
      t.integer :friend_id
      t.date :next_appointment

      t.timestamps
    end
  end
end
