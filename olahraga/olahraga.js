// filter array
let filterarray = [];

// gallery card array
let galleryarray = [
  {
    id: 1,
    name: "Stadion Gor Segiri",
    src: "../gambar/gor_segiri.jpg",
    desc: "Tonton pertandingan sepakbola terbaik dari stadion dengan kualitas yang baik"
  },

  {
    id: 2,
    name: "Lapangan Bulu Tangkis",
    src: "../gambar/bulu_tangkis.jpg",
    desc: "Bermain olahraga nomor satu di Indonesia dan gapai cita-citamu jadi pebulu tangksi profesional"
  },

  {
    id: 3,
    name: "Kolam Renang Segiri",
    src: "../gambar/kolam_renang_segiri.jpg",
    desc: "Selain sepakbola, Stadion Segiri juga dilengkapi dengan faslitas berupa kolam renang"
  },

  {
    id: 4,
    name: "Panjat Tebing",
    src: "../gambar/panjat_tebing_palaran.jpeg",
    desc: "Ingin menguji nyali ketinggian? kamu bisa coba di Panjat Tebing ini"
  },

  {
    id: 5,
    name: "Lapangan Hockey",
    src: "../gambar/lapangan_hockey.jpg",
    desc: "Di kota Samarinda ini juga tersedia lapangan hockey loh, yuk cobain"
  },

  {
    id: 6,
    name: "Mini Golf",
    src: "../gambar/mini_golf.jpg",
    desc: "Bersantai di Hotel Mesra sambil bermain mini golf"
  },

  {
    id: 7,
    name: "Stadion Sepak Bola Palaran",
    src: "../gambar/stadion_palaran.jpeg",
    desc: "Sepakbola, olahraga paling populer, nikmati pertandingan bola di Stadion ini"
  },


];

    let currentPage = 1;
    const itemsPerPage = 6;

    showgallery(galleryarray, currentPage, itemsPerPage);
    createPagination(galleryarray, currentPage, itemsPerPage);

        function showgallery(curarra, currentPage, itemsPerPage) {
            document.getElementById("card").innerHTML = "";
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const currentItems = curarra.slice(startIndex, endIndex);

            for (var i = 0; i < currentItems.length; i++) {
                document.getElementById("card").innerHTML += `
                    <div class="col-md-4 mt-3">
                        <div class="card p-3 ps-5 pe-5">
                            <h4 class="text-capitalize text-center">${currentItems[i].name}</h4>
                            <img src="${currentItems[i].src}" width="100%" height="320px"/>
                            <p class="mt-2">${currentItems[i].desc}</p>
                            <button class="btn btn-primary w-100 mx-auto" onclick="redirectToLocation(${currentItems[i].id})">Menuju Lokasi</button>
                        </div>
                    </div>
                `;
            }
        }

        function redirectToLocation(id) {
            switch (id) {
                case 1:
                    openGoogleMaps("Stadion Gor Segiri");
                    break;
                case 2:
                    openGoogleMaps("Bulu Tangkis Samarinda");
                    break;
                case 3:
                    openGoogleMaps("Kolam Renang Segiri");
                    break;
                case 4:
                    openGoogleMaps("Panjat Tebing Palaran");
                    break;
                case 5:
                    openGoogleMaps("Lapangan Hockey Samarinda");
                    break;
                case 6:
                    openGoogleMaps("Mini Golf Hotel Mesra");
                    break;
                case 7:
                    openGoogleMaps("Stadion Sepak Bola Palaran");
                    break;
                default:
                    break;
            }
        }

        function openGoogleMaps(destination) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;
                    var currentPosition = latitude + "," + longitude;

                    var url = "https://www.google.com/maps/dir/" + currentPosition + "/" + destination;
                    window.open(url, "_blank");
                });
            } else {
                alert("Geolocation tidak didukung oleh browser ini.");
            }
        }

        function getCurrentLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;
                    var currentPosition = latitude + "," + longitude;
                    var destination = "Gor Segiri Samarinda"; // Tujuan: Gor Segiri Samarinda

                    var url = "https://www.google.com/maps/dir/" + currentPosition + "/" + destination;
                    window.open(url, "_blank");
                });
            } else {
                alert("Geolocation tidak didukung oleh browser ini.");
            }
        }

    // For Live Searching Product
    document.getElementById("myinput").addEventListener("keyup", function () {
        let text = document.getElementById("myinput").value;

        filterarray = galleryarray.filter(function (a) {
            if (a.name.includes(text)) {
                return a.name;
            }
        });
        if (this.value == "") {
            showgallery(galleryarray, currentPage, itemsPerPage);
        } else {
            if (filterarray == "") {
                document.getElementById("para").style.display = "block";
                document.getElementById("card").innerHTML = "";
            }
            else {
                showgallery(filterarray, currentPage, itemsPerPage);
                document.getElementById("para").style.display = "none";
            }
        }
    });



    function sortGallery(order) {
        let sortedArray;
        if (order === "asc") {
            sortedArray = galleryarray.sort((a, b) => a.name.localeCompare(b.name));
        } else if (order === "desc") {
            sortedArray = galleryarray.sort((a, b) => b.name.localeCompare(a.name));
        }

        showgallery(sortedArray, currentPage, itemsPerPage);
        createPagination(sortedArray, currentPage, itemsPerPage);
    }

    function createPagination(curarra, currentPage, itemsPerPage) {
        const totalPages = Math.ceil(curarra.length / itemsPerPage);
        const paginationElement = document.getElementById("pagination");

        paginationElement.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = "#";
            a.textContent = i;
            if (i === currentPage) {
                li.classList.add("active");
            }

            a.addEventListener("click", function () {
                currentPage = i;
                showgallery(curarra, currentPage, itemsPerPage);
                createPagination(curarra, currentPage, itemsPerPage);
            });

            li.appendChild(a);
            paginationElement.appendChild(li);
        }
    }

    function capitalizeFirstLetter() {
      var input = document.getElementById("myinput");
      var words = input.value.split(" ");
      for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
      input.value = words.join(" ");
    }

function scrollToSort() {
  var sortDropdown = document.getElementById("sortDropdown");
  var topPos = sortDropdown.getBoundingClientRect().top;
  var start = null;

  function scrollToTop(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    var increment = Math.min(progress / 500, 1) * topPos;

    window.scrollTo(0, increment);

    if (progress < 500 && window.pageYOffset < topPos) {
      requestAnimationFrame(scrollToTop);
    }
  }

  requestAnimationFrame(scrollToTop);
}
