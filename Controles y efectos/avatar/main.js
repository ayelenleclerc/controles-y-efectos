(function () {
    document.querySelector('#file-uploader')
        .addEventListener('change', function (e) {
            let file = e.target.files;
            
            let image = file[0];

            let imageURL = URL.createObjectURL(image);

            document.querySelector('.profile .img')
                .style.backgroundImage = "url(" + imageURL + ")";
    })
})();