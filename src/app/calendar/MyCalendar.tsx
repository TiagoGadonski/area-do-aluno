"use client"
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function MyFullCalendar() {
    const handleEventClick = (clickInfo: any) => {  // Usando 'any' temporariamente
        alert(`Event: ${clickInfo.event.title}`);
    };

    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            events={[
                { title: 'Event 1', date: '2024-05-01' },
                { title: 'Event 2', date: '2024-05-02' }
            ]}
            eventClick={handleEventClick}
        />
    );
}

export default MyFullCalendar;
