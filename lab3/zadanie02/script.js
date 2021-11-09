var img_count = 0;
        var img_arr = ["images/mountain1.jpg", "images/skate3-medium.jpg"]
        var outline_arr = ["tomato", "blue"]


        let button = document.getElementById("button");
        button.addEventListener("click", updateDoc, false);

        function updateDoc() {
            let obrazek = document.getElementById("obrazek");
            img_count++;
            obrazek.src = img_arr[img_count % 2];
            obrazek.style.outlineColor = outline_arr[img_count % 2];
        }