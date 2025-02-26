document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth', 
    contentHeight: 'auto', 
    aspectRatio: 1.5,   
    events: [

      { title: 'Tree Plantation', start: '2025-02-28', color: '#28a745' },
      { title: 'Blood Donation Camp', start: '2025-03-01', color: '#dc3545' },
      { title: 'Book Donation Drive', start: '2025-03-08', color: '#007bff' },
      { title: 'Clean-Up Drive', start: '2025-02-22', color: '#ffc107' },
      { title: 'Career Guidance Workshop', start: '2025-01-30', color: '#17a2b8' },
      { title: 'Bizz Tech', start: '2025-03-15', color: '#6610f2' },
      { title: 'Team-Building Retreat', start: '2025-03-22', color: '#e83e8c' },
      { title: 'Resume Building Workshop', start: '2025-02-01', color: '#fd7e14' },
      { title: 'Health Check-Up Camp', start: '2025-04-05', color: '#20c997' },
      { title: 'Youth Leadership Summit', start: '2025-04-01', color: '#6f42c1' },
      { title: 'Food Drive', start: '2025-04-12', color: '#198754' },
      { title: 'Debate and Public Speaking Competition', start: '2025-03-29', color: '#d63384' },
      { title: 'Senior Citizen Support Day', start: '2025-04-12', color: '#0d6efd' },
      { title: 'Ethnic Day', start: '2025-03-20', color: '#f5b700' }

    ]
  });
  calendar.render();
});
