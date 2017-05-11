$(document).ready(function() {
    //add kitten form
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
                //success
                if (response.errmsg === undefined){
                    $("#kittens .row").append(
                        `<div class="col col-md-2">
                            <h3>${response.name}</h3>
                            <p>Available : ${response.available}</p>
                            <button onclick="more('${response._id}')">More</button>
                        </div>`
                    );
                } else {
                    alert('error : kitten name already taken');
                }
            },
            error: function(response) {
                console.log(response);
            }
        });
    });
});



//kitten detail
function more(id){
    $.ajax({
        method: 'GET',
        url: '/kittens/' + id,
        success: function(response) {
            //success
            if (response.errmsg === undefined){
                console.log(response);
                $("#kittendetail").html(
                    `<button onclick="closeDetail()">X</button>
                    <h2>Kitten Detail</h2>
                    <h3>${response.name}</h3>
                    <ul>
                    <li>Color : ${response.color}</li>
                    <li>Quality 1 : ${response.quality1}</li>
                    <li>Quality 1 : ${response.quality2}</li>
                    <li>Default : ${response.default}</li>
                    <li>Best Food : ${response.bestFood}</li>
                    <li>Available : ${response.available}</li>
                    </ul>`
                );
            } else {
                alert('error !!');
            }
        },
        error: function(response) {
            console.log(response);
        }
    });
};

//close
function closeDetail(){
    $("#kittendetail").html('');
};