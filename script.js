document.getElementById('paymentForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nama = document.getElementById('nama').value;
  const nominal = document.getElementById('nominal').value;
  const metode = document.getElementById('metode').value;
  if (!nama || !nominal || !metode) {
    alert("Mohon isi semua data!");
    return;
  }
  const token = 'ISI_TOKEN_BOT';
  const chat_id = 'ISI_CHAT_ID';
  const pesan = `🧾 Pembayaran Baru\\n\\n👤 Nama: ${nama}\\n💸 Nominal: Rp${nominal}\\n💳 Metode: ${metode}`;
  fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(pesan)}`)
    .then(r => r.json())
    .then(d => {
      document.getElementById('hasil').innerText = d.ok ? '✅ Pesanan berhasil dikirim!' : '❌ Gagal kirim pesanan.';
    })
    .catch(() => {
      document.getElementById('hasil').innerText = '❌ Terjadi kesalahan.';
    });
});