document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth', 
    contentHeight: 'auto', 
    aspectRatio: 1.5,   
    events: [

      // { title: 'Tree Plantation', start: '2025-03-13', color: '#28a745' },
      { title: 'Mahadan 10.0', start: '2025-03-13', color: '#dc3545' },
      

    ]
  });
  calendar.render();
});
