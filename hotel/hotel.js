// filter array
let filterarray = [];

// gallery card array
let galleryarray = [
  {
    id: 1,
    name: "Palm Garden Guesthouse",
    src: "../gambar/palm_garden.jpg",
    desc: "220.000/Malam"
  },
  {
    id: 2,
    name: "Violand Garden Hotel",
    src: "../gambar/violand_garden_hotel.jpg",
    desc: "398.000/Malam"
  },
  {
    id: 3,
    name: "Harris Hotel",
    src: "../gambar/harris.jpg",
    desc: "797.000/Malam"
  },
  {
    id: 4,
    name: "Hotel Mahakam",
    src: "../gambar/hotel_mahakam.jpg",
    desc: "276.000/Malam"
  },
  {
    id: 5,
    name: "Hotel Aida Syariah",
    src: "../gambar/hotel_aida.jpg",
    desc: "203.000/Malam"
  },
  {
    id: 6,
    name: "Mesra Sangkulirang Bay",
    src: "../gambar/mesra_sangkulirang.jpg",
    desc: "631.000/Malam"
  },

  {
    id: 7,
    name: "JB Hotel",
    src: "../gambar/jb_hotel.jpg",
    desc: "153.000/Malam"
  },

  {
    id: 8,
    name: "Hotel Selyca Mulia",
    src: "../gambar/selyca_mulia.jpg",
    desc: "856.000/Malam"
  },
  {
    id: 9,
    name: "RedDoorz Syariah",
    src: "../gambar/reddoorz_syariah.jpg",
    desc: "571.000/Malam"
  },
  {
    id: 10,
    name: "Hotel Andira Syariah",
    src: "../gambar/andira_syariah.jpg",
    desc: "68.000/Malam"
  },
  {
    id: 11,
    name: "Grand Jamrud 1 Hotel",
    src: "../gambar/grand_jamrud.jpg",
    desc: "423.000/Malam"
  },
  {
    id: 12,
    name: "Grand Verona Hotel",
    src: "../gambar/grand_verona.jpg",
    desc: "704.000/Malam"
  },
  {
    id: 13,
    name: "The Hotel",
    src: "../gambar/the_hotel.jpg",
    desc: "438.000/Malam"
  },
  {
    id: 14,
    name: "Hotel Mega Sentosa",
    src: "../gambar/mega_sentosa.jpg",
    desc: "129.000/Malam"
  },
  {
    id: 15,
    name: "Hotel Celia",
    src: "../gambar/hotel_celia.jpg",
    desc: "340.000/Malam"
  },
  {
    id: 16,
    name: "Swiss-Belhotel Borneo",
    src: "../gambar/swiss_belhotel.jpg",
    desc: "809.000/Malam"
  },
  {
    id: 17,
    name: "Radja Hotel",
    src: "../gambar/radja_hotel.jpg",
    desc: "473.000/Malam"
  },
  {
    id: 18,
    name: "RedDoorz near Samarinda Square",
    src: "../gambar/reddoorz_near.jpg",
    desc: "225.000/Malam"
  },
  {
    id: 19,
    name: "Homestay Levida RedPartner",
    src: "../gambar/levida_red_partner.jpg",
    desc: "191.000/Malam"
  },
  {
    id: 20,
    name: "The Djakarta Anandita Syariah Hotel",
    src: "../gambar/djakarta_anandita_syariah.jpg",
    desc: "297.000/Malam"
  },
  {
    id: 21,
    name: "Mesra Business & Resort Hotel",
    src: "../gambar/mesra_business.jpg",
    desc: "541.000/Malam"
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
              <button class="btn btn-primary w-100 mx-auto" onclick="redirectToLocation(${currentItems[i].id})">Transaksi</button>
            </div>
          </div>
        `;
      }
    }

    function redirectToLocation(id) {
      switch (id) {
        case 1:
          window.location.href = "palm_garden/palm_garden_th.html";
          break;
        case 2:
          window.location.href = "violand_garden/violand_garden_th.html";
          break;
        case 3:
          window.location.href = "harris_hotel/harris_hotel_th.html";
          break;
        case 4:
          window.location.href = "hotel_mahakam/hotel_mahakam_th.html";
          break;
        case 5:
          window.location.href = "hotel_aida_syariah/hotel_aida_syariah_th.html";
          break;
        case 6:
          window.location.href = "mesra_sangkuliran_bay/mesra_sangkuliran_bay_th.html";
          break;
        case 7:
          window.location.href = "jb_hotel/jb_hotel_th.html";
          break;
        case 8:
          window.location.href = "selyca_mulia/selyca_mulia_th.html";
          break;
        case 9:
          window.location.href = "reddorz_syariah/reddorz_syariah_th.html";
          break;
        case 10:
          window.location.href = "andira_syariah/andira_syariah_th.html";
          break;
        case 11:
          window.location.href = "grand_jamrud/grand_jamrud_th.html";
          break;
        case 12:
          window.location.href = "grand_verona/grand_verona_th.html";
          break;
        case 13:
          window.location.href = "the_hotel/the_hotel_th.html";
          break;
        case 14:
          window.location.href = "mega_sentosa/mega_sentosa_th.html";
          break;
        case 15:
          window.location.href = "hotel_celia/hotel_celia_th.html";
          break;
        case 16:
          window.location.href = "swiss_belhotel_borneo/swiss_belhotel_borneo_th.html";
          break;
        case 17:
          window.location.href = "radja_hotel/radja_hotel_th.html";
          break;
        case 18:
          window.location.href = "reddoorz_near/reddoorz_near_th.html";
          break;
        case 19:
          window.location.href = "homestay_levida_red_partner/homestay_levida_red_partner_th.html";
          break;
        case 20:
          window.location.href = "the_djakarta_anandita_syariah/the_djakarta_anandita_syariah_th.html";
          break;
        case 21:
          window.location.href = "mesra_business/mesra_business_th.html";
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
            } else if (order === "price_low_high") {
                sortedArray = galleryarray.sort((a, b) => {
                    const priceA = parseInt(a.desc);
                    const priceB = parseInt(b.desc);
                    return priceA - priceB;
                });
            } else if (order === "price_high_low") {
                sortedArray = galleryarray.sort((a, b) => {
                    const priceA = parseInt(a.desc);
                    const priceB = parseInt(b.desc);
                    return priceB - priceA;
                });
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
