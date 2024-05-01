// filter array
let filterarray = [];

// gallery card array
let galleryarray = [
  {
    id: 1,
    name: "Air Terjun Tanah Merah",
    src: "../gambar/air_terjun_tanah_merah.jpg",
    desc: "Nikmati sejuknya suasana di Air Terjun Tanah Merah"
  },
  {
    id: 2,
    name: "Desa Budaya Pampang",
    src: "../gambar/desa_budaya_pampang.jpg",
    desc: "Datang, nikmati, dan saksikan keseharian dari warga Desa Budaya Pampang"
  },

  {
    id: 3,
    name: "Kampung Tenun Samarinda",
    src: "../gambar/kampung_tenun.png",
    desc: "Pusat peradaban kampung tenun di Samarinda, disini kamu dapat melihat banyak ibu-ibu menenun"
  },

  {
    id: 4,
    name: "Telaga Permai Batu Besaung",
    src: "../gambar/telaga_permai_batu_besaung.jpg",
    desc: "Selain Air Terjun Tanah Merah, di kota ini juga terdapat Telaga Permai Batu Besaung"
  },

  {
    id: 5,
    name: "Masjid Islamic Center",
    src: "../gambar/bg.jpg",
    desc: "Tempat religius iconic di Samarinda, menjadi masjid terbesar kedua di Asia Tenggara"
  },

  {
    id: 6,
    name: "Kebun Raya Unmul Samarinda",
    src: "../gambar/kebun_raya_unmul.jpg",
    desc: "Nikmati berlibur ke Kebun Raya Unmul Samarinda"
  }, 

  {
    id: 7,
    name: "Kampung Ketupat",
    src: "../gambar/kampung_ketupat.jpeg",
    desc: "Kampung ketupat, salah satu kampung yang tidak boleh terlewatkan ketika berkunjung ke Samarinda"
  },

  {
    id: 8,
    name: "Air Terjun Pinang Seribu",
    src: "../gambar/air_terjun_pinang_seribu.jpg",
    desc: "Nikmati berlibur ke Air Terjun Samarinda tepatnya di Air Terjun Pinang Seribu"
  },

  {
    id: 9,
    name: "Mahakam Lampion Garden",
    src: "../gambar/mgl.jpg",
    desc: "Terdapat banyak Lampion di tempat ini, membuatnya terlihat semakin menarik saat malam tiba"
  },

  {
    id: 10,
    name: "Air Terjun Berambai",
    src: "../gambar/air_terjun_barambai.jpg",
    desc: "Ketika berkunjung ke Samarinda, jangan lupa juga untuk menikmati wisata Air Terjun Berambai yang tidak kalah menarik ini"
  },

  {
    id: 11,
    name: "Bukit Batu Putih",
    src: "../gambar/bukit_batu_putih.jpg",
    desc: "Berwisata ke Bukit Batu Putih dan lihat pemandangan asri dari puncak bukit"
   },

  {
    id: 12,
    name: "Tjiu Palace",
    src: "../gambar/tjiu_palace.jpg",
    desc: "Ajak teman-teman dan keluargamu untuk berlibur ke Tjiu Palace ini, dijamin seru deh"
  },

  {
    id: 13,
    name: "Teluk Lerong Garden",
    src: "../gambar/teluk_lerong_garden.jpg",
    desc: "Nikmati pemandangan di tepian sembari melihat kecantikan dari lampion di Teluk Lerong Garden"
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
              <button class="btn btn-primary w-100 mx-auto" onclick="redirectToLocation(${currentItems[i].id})">Rincian</button>
            </div>
          </div>
        `;
      }
    }

    function redirectToLocation(id) {
      switch (id) {
        case 1:
          window.location.href = "air_terjun_tanah_merah/air_terjun_tanah_merah.html";
          break;
        case 2:
          window.location.href = "desa_budaya_pampang/desa_budaya_pampang.html";
          break;
        case 3:
          window.location.href = "kampung_tenun/kampung_tenun.html";
          break;
        case 4:
          window.location.href = "telaga_permai_batu_besaung/telaga_permai_batu_besaung.html";
          break;
        case 5:
          window.location.href = "masjid_islamic_center/masjid_islamic_center.html";
          break;
        case 6:
          window.location.href = "kebun_raya_unmul/kebun_raya_unmul.html";
          break;
        case 7:
          window.location.href = "kampung_ketupat/kampung_ketupat.html";
          break;
        case 8:
          window.location.href = "air_terjun_pinang_seribu/air_terjun_pinang_seribu.html";
          break;
        case 9:
          window.location.href = "mlg/mlg.html";
          break;
        case 10:
          window.location.href = "air_terjun_barambai/air_terjun_barambai.html";
          break;
        case 11:
          window.location.href = "bukit_batu_putih/bukit_batu_putih.html";
          break;
        case 12:
          window.location.href = "tjiu_palace/tjiu_palace.html";
          break;
        case 13:
          window.location.href = "teluk_lerong_garden/teluk_lerong_garden.html";
          break;
        default:
          break;
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
