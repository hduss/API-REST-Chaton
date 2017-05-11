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
                    $("#kittens .row").append(`
                        <div class="col col-md-2">
                            <h3>${response.name}</h3>
                            <p>Available : ${response.available}</p>
                            <button onclick="more('${response._id}')">More</button>
                        </div>
                   `);
                } else {
                    alert('error : kitten name already taken');
                }
            },
            error: function(response) {
                console.log(response);
            }
        });
    });

    //kitten modif
    $('#formModif').on('submit', (event) => {
        event.preventDefault();

        const id = $('#id').val();

            const data ={
                "name" : $('#formModif #name').val(),
                "color" : $('#formModif #color').val(),
                "quality1" : $('#formModif #quality1').val(),
                "quality2" : $('#formModif #quality2').val(),
                "defaults" : $('#formModif #defaults').val(),
                "bestFood" : $('#formModif #bestFood').val(),
                "available" : $('input[name=available]:checked').val()
            };

            $.ajax({
                method: 'PUT',
                url: '/kittens/' + id,
                data: data,
                success: function(response) {
                    //success
                    if (response.errmsg === undefined){
                        console.log(response);
                        $("#info h3").text(response.name);
                        $("#info #color").text(`color : ${response.color}`);
                        $("#info #quality1").text(`quality 1 : ${response.quality1}`);
                        $("#info #quality2").text(`quality 2 : ${response.quality2}`);
                        $("#info #default").text(`default : ${response.defaults}`);
                        $("#info #bestFood").text(`best food : ${response.bestFood}`);
                        $("#info #available").text(`available : ${response.available}`);
                        $("#info #btnModif").click(function(){modifFormKitten(id);});
                        $("#info #btnDelete").click(function(){deleteKitten(id);});
                        $("#info").css( "display", "unset" );
                        $("#modif").css( "display", "none" );

                        $(`#${response._id} h3`).text(response.name);
                        $(`#${response._id} p`).text(`available : ${response.available}`);
                    } else {
                        alert('error');
                        console.log(response.errmsg);
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
                $("#info h3").text(response.name);
                $("#info #color").text(`color : ${response.color}`);
                $("#info #quality1").text(`quality 1 : ${response.quality1}`);
                $("#info #quality2").text(`quality 2 : ${response.quality2}`);
                $("#info #default").text(`default : ${response.defaults}`);
                $("#info #bestFood").text(`best food : ${response.bestFood}`);
                $("#info #available").text(`available : ${response.available}`);
                $("#info #btnModif").click(function(){modifFormKitten(id);});
                $("#info #btnDelete").click(function(){deleteKitten(id);});
                $("#info").css( "display", "unset" );
                $("#modif").css( "display", "none" );
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
    $("#info").css( "display", "none" );
    $("#modif").css( "display", "none" );
};

//delete kitten
function deleteKitten(id){
    const conf = confirm('Are you sure you want to delete this poor Kitten ?');
    if (conf){
        $.ajax({
            method: 'DELETE',
            url: '/kittens/' + id,
            success: function(response) {
                //success
                if (response.errmsg === undefined){
                    $("#info").css( "display", "none" );
                    $("#modif").css( "display", "none" );
                    $( `#${id}`).remove();
                    $('#info #btnDelete').off('click');
                    alert(response.message);
                } else {
                    alert('error !!');
                }
            },
            error: function(response) {
                console.log(response);
            }
        });
    }
};

//modify kitten
function modifFormKitten(id){
    $.ajax({
        method: 'GET',
        url: '/kittens/' + id,
        success: function(response) {
            //success
            if (response.errmsg === undefined){

                $("#info").css( "display", "none" );
                $("#formModif #id").val(response._id);
                $("#formModif #name").val(response.name);
                $("#formModif #color").val(response.color);
                $("#formModif #quality1").val(response.quality1);
                $("#formModif #quality2").val(response.quality2);
                $("#formModif #defaults").val(response.defaults);
                $("#formModif #bestFood").val(response.bestFood);
                $("#formModif #available-yes").prop("checked", false)
                $("#formModif #available-no").prop("checked", true)
                if(response.available){
                    $("#available-yes").prop("checked", true)
                    $("#available-no").prop("checked", false)
                }
                $("#modif #btnCancel").click(function(){more(id);});
                $("#modif").css( "display", "unset" );
            } else {
                alert('error !!');
            }
        },
        error: function(response) {
            console.log(response);
        }
    });
};