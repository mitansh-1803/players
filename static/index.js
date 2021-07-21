$(document).ready(function(){
    console.log('Script loaded!!');
    var id = parseInt(location.search.split('=')[1]);
    if(id == 1){
        $('#prev-btn').attr({"disabled": "true"})
    }
    if(id == 10){
        $('#next-btn').attr({"disabled": "true"})
    }
    $.get(`http://localhost:3000/players/${id}`,function(response){
        console.log(response)
        $('#player-image').attr({
            src: response[0].image,
            alt: response[0].name
        })
        $('#name').html(response[0].name);
        $('#team').html(response[0].team);
        $('#born').html(response[0].born);
        $('#birth-place').html(response[0].birthPlace);
        $('#role').html(response[0].role);
        $('#batting-style').html(response[0].battingStyle);
        $('#bowling-style').html(response[0].bowlingStyle);
        $('#tshirt-number').html(response[0].shirtNumber);
    })

    $('#next-btn').click(function(){
        if(id<10){
            location.search = `?id=${id+1}`
        }
    })
    $('#prev-btn').click(function(){
        if(id>1){
            location.search = `?id=${id-1}`
        }
    })
})