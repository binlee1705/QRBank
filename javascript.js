const wow = new WOW(
    {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 50,
        live: true
    }
);
new WOW().init();
fetch('./data.json')
    .then((response) => response.json())
    .then((array) => {
        if (array && array.length > 0) {
            const html = array.map((g, i) => (
                `<div class="item wow fadeInDown" data-wow-delay="${(i * 0.2).toFixed(2)}s">
                    <div class="nameVertical">
                        ${g.name.split(' ').join('<span class="space"></span>')}
                    </div>
                    <div class="bound">
                        <div class="image">
                            <div class="itImage">
                                <img src="${g.image}" alt="${g.name}">
                            </div>
                        </div>                       
                    </div> 
                    <div class="birthday">
                        ${g.birthday}
                    </div>
                </div>`
            ));
            $("#QR").html(html);
        }
    }); 