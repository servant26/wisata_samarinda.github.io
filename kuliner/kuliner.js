// filter array
let filterarray = [];

// gallery card array
let galleryarray = [
  {
    id: 1,
    name: "Coto Makassar Marannu",
    src: "../gambar/coto_makassar_maranmu.jpg",
    desc: "Datang dan nikmati Coto Makassar di warung ini"
  },
  {
    id: 2,
    name: "Alaya Food Festival",
    src: "../gambar/alaya_food_festival.jpg",
    desc: "Nikamti makanan di tempat ini dengan desain restoran kekinian"
  },
  {
    id: 3,
    name: "Ayam Goreng Banjar",
    src: "../gambar/ayam_goreng_banjar.jpg",
    desc: "Coba Ayam Goreng Banjar di warung makan ini, dijamin enak kok"
  },
  {
    id: 4,
    name: "Rumah Makan Bemo",
    src: "../gambar/rumah_makan_bemo.jpg",
    desc: "Di warung ini, tersedia makanan yang harganya cukup bersahabat di kantong"
  },
  {
    id: 5,
    name: "Hary Crab Samarinda",
    src: "../gambar/hary_crab.jpg",
    desc: "Pusat makanan laut (seafood) ada disini, jika kamu menyukai makanan seafood, jangan lupa datang kesini yaa"
  },
  {
    id: 6,
    name: "Raja Kepala Ikan",
    src: "../gambar/raja_kepala_ikan.jpg",
    desc: "Sesuai dengan nama warungnya, menu utama dari warung makan ini adalah Ikan"
  },
  {
    id: 7,
    name: "Rumah Makan Acil Inun",
    src: "../gambar/rm_acil_inun.jpeg",
    desc: "Dirumah makan ini tersedia berbagai macam menu yang tentunya bersahabat di kantong"
  },
  {
    id: 8,
    name: "Kedai Sabindo",
    src: "../gambar/kedai_sabindo.jpg",
    desc: "Tempat makan yang tidak kalah menarik dari tempat makan lain di Samarinda"
  },
  {
    id: 9,
    name: "Soto Banjar Amado",
    src: "../gambar/soto_banjar_amado.jpg",
    desc: "Ingin menikmati Soto Banjar? yuk cobain langsung ke warung makan ini"
  },
  {
    id: 10,
    name: "Es Teler 77",
    src: "../gambar/es_teler77.jpeg",
    desc: "Gerah-gerah gini, enaknya minum Es Teler ya? kalo kamu haus, mungkin Es Teler 77 ini bisa jadi tempat yang cocok"
  },
  {
    id: 11,
    name: "DPuncak Cafe Samarinda",
    src: "../gambar/d_puncak.jpg",
    desc: "Menikmati makanan dan melihat pemandangan dari puncak"
  },
  {
    id: 12,
    name: "Kampung Nasi Kuning Ijay",
    src: "../gambar/kampung_nasi_kuning.jpg",
    desc: "Pusat dari pembuatan nasi kuning di Samarinda"
  },
  {
    id: 13,
    name: "Rumah Makan Anna",
    src: "../gambar/rm_anna.jpg",
    desc: "Nikmati kepiting asam manis, ikan bakar, dll di warung makan ini"
  },
  {
    id: 14,
    name: "Depot Pusaka Indah",
    src: "../gambar/depot_pustaka_indah.jpg",
    desc: "Warung makan ini menyediakan Soto dll"
  },
  {
    id: 15,
    name: "Pondok Steak Sari Pasifik",
    src: "../gambar/pondok_steak_sari_pasifik.jpg",
    desc: "Steak adalah menu utama dari makanan ini"
  },
  {
    id: 16,
    name: "Rumah Makan Pondok Borneo",
    src: "../gambar/rm_pondok_borneo.jpg",
    desc: "Merupakan rumah makan dengan menu utama makanan laut"
  },
  {
    id: 17,
    name: "Warung Banjar Sari",
    src: "../gambar/warung_banjar_sari.jpg",
    desc: "Tersedia berbagai menu disini mulai dari Ayam Bakar hingga Ayam Goreng"
  },
  {
    id: 18,
    name: "Rumah Makan Torani Djuanda",
    src: "../gambar/rm_torani.jpg",
    desc: "Jika kamu kebetulan bertempat tinggal di area Djuanda, jangan lupa datang ke warung makan ini"
  }

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
                    openGoogleMaps("Coto Makassar Marannu");
                    break;
                case 2:
                    openGoogleMaps("Alaya Food Festival");
                    break;
                case 3:
                    openGoogleMaps("Ayam Goreng Banjar");
                    break;
                case 4:
                    openGoogleMaps("Rumah Makan Bemo");
                    break;
                case 5:
                    openGoogleMaps("Hary Crab Samarinda");
                    break;
                case 6:
                    openGoogleMaps("Raja Kepala Ikan");
                    break;
                case 7:
                    openGoogleMaps("Rumah Makan Acil Inun");
                    break;
                case 8:
                    openGoogleMaps("Kedai Sabindo");
                    break;
                case 9:
                    openGoogleMaps("Soto Banjar Amado");
                    break;
                case 10:
                    openGoogleMaps("Es Teler 77");
                    break;
                case 11:
                    openGoogleMaps("DPuncak Cafe Samarinda");
                    break;
                case 12:
                    openGoogleMaps("Kampung Nasi Kuning Ijay");
                    break;
                case 13:
                    openGoogleMaps("Rumah Makan Anna");
                    break;
                case 14:
                    openGoogleMaps("Depot Pusaka Indah");
                    break;
                case 15:
                    openGoogleMaps("Pondok Steak Sari Pasifik");
                    break;
                case 16:
                    openGoogleMaps("Rumah Makan Pondok Borneo");
                    break;
                case 17:
                    openGoogleMaps("Warung Banjar Sari");
                    break;
                case 18:
                    openGoogleMaps("Rumah Makan Torani Djuanda");
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
