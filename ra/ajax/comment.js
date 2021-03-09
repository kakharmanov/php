$.ajax({
    url: 'ajax/get.php'
}).done(function(res) {
    res = JSON.parse(res)
    console.log(res)
})