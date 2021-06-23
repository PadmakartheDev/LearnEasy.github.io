        var loader = document.getElementById("loader")
        var Content = document.getElementById("content")

        function myfunction(){
            setTimeout(() => {
                loader.style.display = 'none'
                Content.style.display = "block"
            }, 1000);
        }

        myfunction()