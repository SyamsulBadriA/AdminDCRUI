$(document).ready(function() {
    $('#registrationTable').DataTable({
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'excelHtml5',
                text: 'Export to Excel',
                filename: '5km_registration',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                }
            }
        ],
        "pageLength": 10
    });
    
    document.getElementById('registrationLink').addEventListener('click', function(e) {
        e.preventDefault();
        var submenu = document.getElementById('registrationOptions');
        var link = document.getElementById('registrationLink');
        if (submenu.style.display === 'none' || submenu.style.display === '') {
            submenu.style.display = 'block';
            link.classList.add('active');
        } else {
            submenu.style.display = 'none';
            link.classList.remove('active');
        }
    });
});
