User.destroy_all()
Friend.destroy_all()
Appointment.destroy_all()

u1 = User.create(username:'temp', password:'temp')


f1 = Friend.create(name: 'Krysta Sample', phone: "555-867-5309", email: "sameple@live.com", recurrence_integer: 5, recurrence_unit: "days")

a1 = Appointment.create(user_id: u1.id, friend_id: f1.id, next_appointment: Date.strptime('2020-07-13', '%Y-%m-%d'))