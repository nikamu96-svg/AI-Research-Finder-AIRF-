async function searchJudul() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultList = document.getElementById("resultList");
    resultList.innerHTML = "Mencari…";

    const response = await fetch("data/skripsi.json");
    const data = await response.json();

    const hasil = data.filter(item => 
        item.judul.toLowerCase().includes(input)
    );

    if (hasil.length === 0) {
        resultList.innerHTML = "<p>Tidak ditemukan. Judul masih aman untuk digunakan ✔</p>";
        return;
    }

    resultList.innerHTML = "";
    hasil.forEach(item => {
        resultList.innerHTML += `
            <div class="result-item">
                <b>${item.judul}</b><br>
                <small>${item.tahun} — ${item.peneliti}</small>
            </div>
        `;
    });
}
