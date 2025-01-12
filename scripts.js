function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById('clock').textContent = timeString;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initialize the clock immediately
  updateClock();

  document.addEventListener('DOMContentLoaded', () => {
    const monthYear = document.getElementById('month-year');
    const calendarDates = document.getElementById('calendar-dates');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();
    
    function renderCalendar(month, year) {
        const date = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const startDay = date.getDay();
        
        calendarDates.innerHTML = '';
        monthYear.textContent = date.toLocaleString('default', { month: 'long', year: 'numeric' });
        
        for (let i = 0; i < startDay; i++) {
            calendarDates.innerHTML += `<div></div>`;
        }
        
        for (let i = 1; i <= daysInMonth; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = i;
            
            if (year === todayYear && month === todayMonth && i === todayDate) {
                dayDiv.classList.add('today');
            }
            
            dayDiv.addEventListener('click', () => {
                dayDiv.classList.toggle('marked');
            });
            calendarDates.appendChild(dayDiv);
        }
    }
    
    prevButton.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    });
    
    nextButton.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    });
    
    renderCalendar(currentMonth, currentYear);
});
