function showDay(day) {
    const days = document.querySelectorAll('.schedule-table');
    days.forEach(table => table.classList.remove('active'));
    document.getElementById(day).classList.add('active');
}
