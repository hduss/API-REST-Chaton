$(document).ready(function() {
    $('#form').on('submit', (event) => {
        event.preventDefault();

        const data ={
            "name" : $('#name').val(),
            "color" : $('#color').val(),
            "quality1" : $('#quality1').val(),
            "quality2" : $('#quality2').val(),
            "defaults" : $('#defaults').val(),
            "bestFood" : $('#bestFood').val()
        };

        $.ajax({
            method: 'POST',
            url: '/add',
            data: data,
            success: function(response) {
                location.reload();
            },
            error: function(response) {
                console.log(response);
            }
        });
    });
});