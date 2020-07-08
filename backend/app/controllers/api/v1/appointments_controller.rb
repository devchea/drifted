class Api::V1::ApplicationsController < ApplicationController
        # appointment
    # t.integer "user_id"
    #     t.integer "friend_id"
    #     t.date "next_appointment"
    #     t.datetime "created_at", null: false
    #     t.datetime "updated_at", null: false

    # friends 
    # t.string "name"
    # t.string "phone"
    # t.string "email"
    # t.integer "recurrence_integer"
    # t.string "recurrence_unit"
    def convert_time
        # @appointment = Appointment.new(appointment_params)
        # #grab user_id from JWT
        friend_params[:]

    end

    private
    def friend_params
        params.require(:friend).permit!
    end

end