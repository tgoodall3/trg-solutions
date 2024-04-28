import React, { useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from 'react-modal';
import '../Styles/Calendar.css'; // Import your CSS file

const localizer = momentLocalizer(moment);

function AppointmentForm({ modalIsOpen, closeModal, confirmAppointment }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        confirmAppointment(e.target.elements.title.value);
    };

    return (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="appointment-modal">
            <h2>New Appointment</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" required />
                </label>
                <button type="submit">Confirm</button>
            </form>
        </Modal>
    );
}

function MyCalendar() {
    const [events, setEvents] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null);

    const handleSelect = ({ start, end }) => {
        const overlappingEvent = events.find(event => (
            (start >= event.start && start < event.end) ||
            (end > event.start && end <= event.end) ||
            (start <= event.start && end >= event.end)
        ));

        if (!overlappingEvent) {
            setSelectedSlot({ start, end });
            setModalOpen(true);
        }
    };

    const handleConfirm = (title) => {
        setEvents([
            ...events,
            {
                title,
                start: selectedSlot.start,
                end: selectedSlot.end,
                allDay: false
            }
        ]);
        setModalOpen(false);
    };

    return (
        <div style={{ height: '500px' }}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                selectable
                onSelectSlot={handleSelect}
                views={[Views.MONTH, Views.WEEK, Views.DAY]}
            />
            <AppointmentForm
                modalIsOpen={modalOpen}
                closeModal={() => setModalOpen(false)}
                confirmAppointment={handleConfirm}
            />
        </div>
    );
}

export default MyCalendar;