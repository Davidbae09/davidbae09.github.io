$.getJSON('data/anime.json', function (data) {
    let anime = data.anime;
    $.each(anime, function (i, data) {
        let animeCard = $('<div class="col-md-4 my-3"></div>');
        let cardContent = $('<div class="card mb-3" style="height: 40rem;"></div>');
        
        cardContent.append('<img src="' + data.picture + '" height="470" class="card-img-top">');
        cardContent.append('<div class="card-body"><h5 class="card-title">' + data.title + '</h5><h6 class="card-subtitle mb-2 text-muted">' + data.animeSeason.year + '</h6><a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#animeDetailModal" data-anime-index="' + i + '">Show Details</a></div>');
        
        animeCard.append(cardContent);
        $('#daftar-anime').append(animeCard);
    });

    $('#animeDetailModal').on('show.bs.modal', function (event) {
        let modalTrigger = $(event.relatedTarget);
        let selectedAnimeIndex = modalTrigger.data('anime-index'); 
        let selectedAnime = anime[selectedAnimeIndex];
        console.log(selectedAnime); 

        let modal = $(this);
        modal.find('.modal-title').text(selectedAnime.title);
        modal.find('.modal-body').html('<div class="container-fluid"><div class="row"><div class="col-md-3"><img src="' + selectedAnime.picture + '" class="img-fluid"></div><div class="col-md"><ul class="list-group"><li class="list-group-item"><strong>Release:</strong> ' + selectedAnime.animeSeason.year + '</li><li class="list-group-item"><strong>Episodes:</strong> ' + selectedAnime.episodes + '</li><li class="list-group-item"><strong>Plot:</strong> ' + selectedAnime.plot + '</li></ul></div></div></div>');
    });
});
