document.addEventListener('DOMContentLoaded', function() {
  const segitiga_btn = document.getElementById('segitiga_btn');
  const segitiga_sct = document.getElementById('segitiga_sct');
  const jajargenjang_btn = document.getElementById('jajargenjang_btn');
  const jajargenjang_sct = document.getElementById('jajargenjang_sct');
  const back_up_sct = document.getElementById('back_up_sct');


  segitiga_btn.addEventListener('click', function() {
      segitiga_sct.style.display = "block";  
      this.classList.add('bg-merah200');
           
      back_up_sct.style.display = "block";

      jajargenjang_btn.classList.remove('bg-merah200'); 
      jajargenjang_sct.style.display = "none";
  });

  jajargenjang_btn.addEventListener('click', function() {
      jajargenjang_sct.style.display = "block";
      this.classList.add('bg-merah200');

      back_up_sct.style.display = "block";

      segitiga_btn.classList.remove('bg-merah200');
      segitiga_sct.style.display = "none";
  });
});

function backup() {
  window.back_to({
      top: 0,
      behavior: 'smooth'
  });
}

function hitung_keliling_segitiga(){
  let sisi1 = document.getElementById("sisi-a").value;
  let sisi2 = document.getElementById("sisi-b").value;
  let sisi3 = document.getElementById("sisi-c").value;

  if (sisi1 === "" || sisi2 === "" || sisi3 === "") {
      document.getElementById('hasil_keliling_keliling').textContent = "[Maaf, nilai yang dimasukkan belum lengkap!]";
  } else {
      let hasil =parseInt(sisi1) + parseInt(sisi2) + parseInt(sisi3);
      document.getElementById('hasil_keliling_segitiga').textContent = `[Hasilnya adalah ${hasil}]`;
  }
}

function reset_keliling_segitiga(){
  document.getElementById('sisi-a').value = '';
  document.getElementById('sisi-b').value = '';
  document.getElementById('sisi-c').value = '';
  document.getElementById('hasil_keliling_segitiga').textContent = ''; 
}

function hitung_luas_segitiga(){
  let alas = document.getElementById("panjang-alas").value;
  let tinggi = document.getElementById("tinggi").value;
  
  if (alas === "" || tinggi === "") {
      document.getElementById('hasil_luas_segitiga').textContent = "[Maaf, nilai yang dimasukkan belum lengkap!]";
  } else {
      let hasil = 0.5 * parseInt(alas) * parseInt(tinggi);
      document.getElementById('hasil_luas_segitiga').textContent = `[Hasilnya adalah ${hasil}]`;
  }
}

function reset_luas_segitiga(){
  document.getElementById('panjang-alas').value = '';
  document.getElementById('tinggi').value = '';
  document.getElementById('hasil_luas_segitiga').textContent = ''; 
}

// Fungsi Aritmatik : Jajargenjang
function hitung_keliling_jajargenjang(){
  let sisi1 = document.getElementById("sisi-a").value;
  let sisi2 = document.getElementById("sisi-b").value;

  if (sisi1 === "" || sisi2 === "") {
      document.getElementById('hasil_keliling_jajargenjang').textContent = "[Maaf, nilai yang dimasukkan belum lengkap!]";
  } else {
      let hasil_basic = parseInt(sisi1) + parseInt(sisi2);
      let hasil = 2 * hasil_basic;
      document.getElementById('hasil_keliling_jajargenjang').textContent = `[Hasilnya adalah ${hasil}]`;
  }
}

function reset_keliling_jajargenjang(){
  document.getElementById('sisi-a').value = '';
  document.getElementById('sisi-b').value = '';
  document.getElementById('hasil_keliling_jajargenjang').textContent = ''; 
}

function hitung_luas_jajargenjang(){
  let alas = document.getElementById("panjang-alas").value;
  let tinggi = document.getElementById("tinggi").value;
  
  if (alas === "" || tinggi === "") {
      document.getElementById('hasil_luas_jajar').textContent = "[Maaf, nilai yang dimasukkan belum lengkap!]";
  } else {
      let hasil = parseInt(alas) * parseInt(tinggi);
      document.getElementById('hasil_luas_jajargenjang').textContent = `[Hasilnya adalah ${hasil}]`;
  }
}

function reset_luas_jajargenjang(){
  document.getElementById('panjang-alas').value = '';
  document.getElementById('tinggi').value = '';
  document.getElementById('hasil_luas_jajargenjang').textContent = ''; 
}