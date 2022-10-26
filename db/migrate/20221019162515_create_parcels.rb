class CreateParcels < ActiveRecord::Migration[7.0]
  def change
    create_table :parcels do |t|
      t.integer :weight
      t.string :pickup_location 
      t.boolean :perishable
      t.boolean :fragility
      t.datetime :expected_time
      t.string :delivery_location
      t.string :category_type
      t.integer :user_id

      t.timestamps
    end
  end
end
